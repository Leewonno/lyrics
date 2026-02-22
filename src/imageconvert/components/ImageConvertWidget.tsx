import encodeWebp, { init as initWebpEncoder } from "@jsquash/webp/encode";
import webpEncWasmUrl from "@jsquash/webp/codec/enc/webp_enc.wasm?url";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { media } from "../../lib/media";
import { setMessage, visible } from "../../redux/features/toast/toast";

const Widget = styled.div`
  width: 960px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.phone`
    width: 100%;
    margin: 100px 5% 0;
  `}
`;

const SettingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
`;

const QualityInput = styled.input`
  width: 60px;
  padding: 0.4rem 0.5rem;
  border: none;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 10px;
  font-size: 0.9rem;
  text-align: center;

  &:focus {
    outline: 2px solid #c8c8fa;
  }
`;

const UploadArea = styled.label`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 2px dashed #c8c8c8;
  border-radius: 12px;
  cursor: pointer;
  color: #9b9b9b;
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: #9b9bfa;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`;

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PreviewTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #626262;
`;

const PreviewImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 10px;
  object-fit: contain;
  max-height: 300px;
`;

const InfoText = styled.div`
  font-size: 0.8rem;
  color: #9b9b9b;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    height: 35px;
    padding: 0 1.2rem;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    color: #fff;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 10px;

    &:focus {
      outline: 2px solid #c8c8fa;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;

type FileItem = {
	original: File;
	originalUrl: string;
	webpUrl: string | null;
	webpBlob: Blob | null;
	originalSize: number;
	webpSize: number | null;
};

const formatSize = (bytes: number) => {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

let encoderInitialized = false;

const ensureEncoder = async () => {
	if (encoderInitialized) return;
	const module = await WebAssembly.compileStreaming(fetch(webpEncWasmUrl));
	await initWebpEncoder(module);
	encoderInitialized = true;
};

const convertToWebp = async (
	file: File,
	quality: number,
): Promise<{ url: string; blob: Blob }> => {
	await ensureEncoder();
	const bitmap = await createImageBitmap(file);
	const canvas = document.createElement("canvas");
	canvas.width = bitmap.width;
	canvas.height = bitmap.height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas context 생성 실패");
	ctx.drawImage(bitmap, 0, 0);
	const imageData = ctx.getImageData(0, 0, bitmap.width, bitmap.height);

	const arrayBuffer = await encodeWebp(imageData, { quality });
	const blob = new Blob([arrayBuffer], { type: "image/webp" });
	return { url: URL.createObjectURL(blob), blob };
};

export function ImageConvertWidget() {
	const [items, setItems] = useState<FileItem[]>([]);
	const [quality, setQuality] = useState<number>(100);
	const [converting, setConverting] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const toastCall = (msg: string) => {
		dispatch(setMessage(msg));
		dispatch(visible());
	};

	const handleFiles = (files: FileList | null) => {
		if (!files) return;
		const accepted = Array.from(files).filter((f) =>
			["image/jpeg", "image/png"].includes(f.type),
		);
		if (accepted.length === 0) {
			alert("jpg 또는 png 파일만 업로드 가능합니다.");
			return;
		}
		const newItems: FileItem[] = accepted.map((file) => ({
			original: file,
			originalUrl: URL.createObjectURL(file),
			webpUrl: null,
			webpBlob: null,
			originalSize: file.size,
			webpSize: null,
		}));
		setItems((prev) => [...prev, ...newItems]);
	};

	const handleConvert = async () => {
		setConverting(true);
		try {
			const updated = await Promise.all(
				items.map(async (item) => {
					if (item.webpUrl) return item;
					const { url, blob } = await convertToWebp(item.original, quality);
					return { ...item, webpUrl: url, webpBlob: blob, webpSize: blob.size };
				}),
			);
			setItems(updated);
			toastCall("변환 성공");
		} catch (error) {
			console.log(error);
			alert("변환 중 오류가 발생했습니다.");
		} finally {
			setConverting(false);
		}
	};

	const handleDownload = (item: FileItem) => {
		if (!item.webpUrl) return;
		const link = document.createElement("a");
		link.href = item.webpUrl;
		link.download = item.original.name.replace(/\.(jpe?g|png)$/i, ".webp");
		link.click();
		link.remove();
	};

	const handleDownloadAll = () => {
		for (const item of items) {
			if (item.webpUrl) handleDownload(item);
		}
		toastCall("다운로드 성공");
	};

	const handleReset = () => {
		for (const item of items) {
			URL.revokeObjectURL(item.originalUrl);
			if (item.webpUrl) URL.revokeObjectURL(item.webpUrl);
		}
		setItems([]);
		if (inputRef.current) inputRef.current.value = "";
		toastCall("초기화 성공");
	};

	const allConverted = items.length > 0 && items.every((i) => i.webpUrl);

	return (
		<Widget>
			<SettingBox>
				<Label>
					품질
					<QualityInput
						type="number"
						min={1}
						max={100}
						value={quality}
						onChange={(e) => setQuality(Number(e.target.value))}
					/>
					%
				</Label>
				<ButtonBox>
					<button
						type="button"
						style={{ backgroundColor: "#0d6efd" }}
						onClick={handleConvert}
						disabled={items.length === 0 || converting}
					>
						{converting ? "변환 중..." : "변환"}
					</button>
					<button
						type="button"
						style={{ backgroundColor: "#198754" }}
						onClick={handleDownloadAll}
						disabled={!allConverted}
					>
						전체 다운로드
					</button>
					<button
						type="button"
						style={{ backgroundColor: "#dc3545" }}
						onClick={handleReset}
						disabled={items.length === 0}
					>
						초기화
					</button>
				</ButtonBox>
			</SettingBox>

			<UploadArea>
				<HiddenInput
					ref={inputRef}
					type="file"
					accept="image/jpeg,image/png"
					multiple
					onChange={(e) => handleFiles(e.target.files)}
				/>
				클릭하여 jpg / png 이미지를 업로드하세요 (다중 선택 가능)
			</UploadArea>

			{items.map((item) => (
				<PreviewGrid key={item.originalUrl}>
					<PreviewCard>
						<PreviewTitle>원본 ({item.original.name})</PreviewTitle>
						<PreviewImage src={item.originalUrl} alt="original" />
						<InfoText>크기: {formatSize(item.originalSize)}</InfoText>
					</PreviewCard>
					<PreviewCard>
						<PreviewTitle>변환 결과 (.webp)</PreviewTitle>
						{item.webpUrl ? (
							<>
								<PreviewImage src={item.webpUrl} alt="webp" />
								<InfoText>
									크기: {item.webpSize ? formatSize(item.webpSize) : "-"}
									{item.webpSize
										? ` (${Math.abs(Math.round((1 - item.webpSize / item.originalSize) * 100))}% ${Math.round((1 - item.webpSize / item.originalSize) * 100) < 0 ? "증가" : "감소"})`
										: ""}
								</InfoText>
								<ButtonBox>
									<button
										type="button"
										style={{ backgroundColor: "#198754" }}
										onClick={() => handleDownload(item)}
									>
										다운로드
									</button>
								</ButtonBox>
							</>
						) : (
							<InfoText style={{ marginTop: "1rem" }}>
								변환 버튼을 눌러주세요
							</InfoText>
						)}
					</PreviewCard>
				</PreviewGrid>
			))}
		</Widget>
	);
}
