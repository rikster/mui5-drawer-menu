import { SvgIcon, SvgIconProps } from "@mui/material"

// This icon is available directly in Material UI v5
// TODO: Use icon directly once Material UI migration
// from v4 to v5 is done
export const AdminIcon = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props}>
			<title>Admin_icon</title>
			<g id="Admin_icon" stroke="none" strokeWidth="1">
				<g
					id="1-Icons-/-action-/admin"
					transform="translate(-0.364442, 0.000000)"
				>
					<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z" />
					<path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38c0.62,0,1.12,0.51,1.12,1.12 s-0.51,1.12-1.12,1.12s-1.12-0.51-1.12-1.12S16.38,14.38,17,14.38z M17,19.75c-0.93,0-1.74-0.46-2.24-1.17 c0.05-0.72,1.51-1.08,2.24-1.08s2.19,0.36,2.24,1.08C18.74,19.29,17.93,19.75,17,19.75z" />
				</g>
			</g>
		</SvgIcon>
	)
}
