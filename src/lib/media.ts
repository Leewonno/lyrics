import { type CSSObject, css, type Interpolation } from "styled-components";

type DeviceType = "desktop" | "phone";

const sizes: Record<DeviceType, number> = {
	desktop: 1200,
	phone: 1100,
};

type StyledInterpolation = Interpolation<object>;

const media = Object.entries(sizes).reduce(
	(acc, [key, value]) => {
		acc[key as DeviceType] = (
			first: CSSObject | TemplateStringsArray,
			...interpolations: StyledInterpolation[]
		) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `;
		return acc;
	},
	{} as Record<
		DeviceType,
		(
			first: CSSObject | TemplateStringsArray,
			...interpolations: StyledInterpolation[]
		) => ReturnType<typeof css>
	>,
);

export { media };
