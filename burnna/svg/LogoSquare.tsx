import React, { FC } from 'react'

interface Props {
	className?: string
}

const LogoSquare: FC<Props> = props => {
	return (
		<svg
			{...props}
			width="100%"
			height="auto"
			viewBox="0 0 185 286"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M184.377 165.065C183.886 165.4 183.3 165.568 182.707 165.545C171.987 165.545 161.267 165.545 150.557 165.545C148.935 165.562 147.326 165.259 145.822 164.651C144.319 164.044 142.951 163.144 141.797 162.005C131.197 151.925 118.537 145.905 104.207 143.315C101.686 142.866 99.1254 142.682 96.5665 142.765C92.1365 142.895 87.6965 142.615 83.2565 142.945C77.7367 143.468 72.3137 144.74 67.1366 146.725C57.3216 150.207 48.4296 155.881 41.1366 163.315C40.445 164.054 39.6015 164.634 38.664 165.016C37.7266 165.397 36.7176 165.571 35.7066 165.525C24.3866 165.525 13.0666 165.525 1.70656 165.525C0.106558 165.525 0.106552 165.525 0.106552 163.955V144.525C0.106552 142.715 0.276552 142.525 2.10655 142.525H76.9765C77.4686 142.55 77.9615 142.496 78.4365 142.365C76.8365 141.935 75.2266 141.525 73.6366 141.075C61.8356 137.808 51.0495 131.617 42.2765 123.075C41.3787 122.189 40.3128 121.493 39.1415 121.025C37.9702 120.558 36.7173 120.33 35.4566 120.355H2.05653C0.116533 120.355 -0.0234594 120.205 0.126541 118.285C0.201546 117.25 0.201546 116.21 0.126541 115.175C0.0365406 113.665 0.256533 113.455 1.80653 113.465C3.56653 113.465 5.32653 113.465 7.08653 113.465L26.0865 113.385C26.7249 113.382 27.359 113.281 27.9665 113.085C30.2065 112.375 30.9666 110.825 30.1066 108.605C30.0166 108.345 29.8966 108.095 29.7966 107.835C29.4266 106.775 29.6366 106.435 30.7966 106.425C34.9566 106.425 39.1165 106.425 43.2765 106.425C43.5075 106.412 43.7369 106.469 43.935 106.589C44.133 106.708 44.2904 106.885 44.3866 107.095C44.9131 107.951 45.6589 108.651 46.5468 109.122C47.4347 109.593 48.4323 109.819 49.4365 109.775C59.7565 109.775 70.0899 109.775 80.4365 109.775C81.4259 109.818 82.4091 109.599 83.2869 109.141C84.1648 108.683 84.9063 108.001 85.4365 107.165C85.5602 106.924 85.7526 106.725 85.9893 106.593C86.2261 106.462 86.4965 106.403 86.7666 106.425H152.517C153.657 106.425 153.857 106.775 153.277 107.795C153.067 108.175 152.797 108.525 152.587 108.915C152.3 109.34 152.134 109.835 152.103 110.346C152.073 110.858 152.18 111.369 152.414 111.825C152.648 112.281 152.999 112.667 153.432 112.941C153.865 113.215 154.364 113.369 154.877 113.385C155.797 113.475 156.717 113.475 157.637 113.475L182.287 113.545C183.037 113.545 183.837 113.415 184.337 114.195V119.955C183.977 120.565 183.337 120.425 182.837 120.425C172.087 120.425 161.327 120.425 150.577 120.425C147.063 120.362 143.667 121.696 141.137 124.135C131.722 133.042 120.034 139.181 107.357 141.875C106.757 142.005 106.017 141.875 105.447 142.555H182.567C182.898 142.492 183.24 142.525 183.553 142.648C183.866 142.772 184.138 142.983 184.337 143.255L184.377 165.065Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.377 89.9447C184.148 90.1323 183.884 90.2716 183.601 90.3541C183.317 90.4366 183.02 90.4606 182.727 90.4247C177.567 90.4247 172.406 90.5047 167.246 90.4247C165.723 90.2897 164.197 90.6576 162.902 91.4721C161.607 92.2866 160.615 93.5028 160.077 94.9347C159.287 96.7247 158.406 98.4747 157.656 100.275C157.353 101.108 156.785 101.82 156.039 102.3C155.294 102.781 154.411 103.003 153.526 102.935H148.376C128.056 102.935 107.723 102.935 87.3765 102.935C86.5465 102.935 86.0365 102.865 85.6365 101.885C85.2695 100.87 84.5843 100.002 83.6832 99.4089C82.782 98.8159 81.7133 98.5303 80.6365 98.5947C70.0765 98.5947 59.5198 98.5947 48.9665 98.5947C47.8384 98.5548 46.727 98.8769 45.795 99.5138C44.863 100.151 44.1592 101.069 43.7865 102.135C43.7181 102.393 43.557 102.618 43.3339 102.765C43.1108 102.913 42.8412 102.973 42.5765 102.935C37.9765 102.935 33.3765 102.935 28.7765 102.935C28.2747 102.975 27.7736 102.849 27.3506 102.576C26.9276 102.303 26.6063 101.899 26.4365 101.425C25.5765 99.4247 24.6865 97.3247 23.8465 95.2547C22.5365 91.9947 20.4065 90.4847 16.8465 90.4547C11.7665 90.4547 6.68651 90.4547 1.60651 90.4547C0.0665088 90.4547 -0.0334974 90.3247 0.00650262 88.8147C0.00650262 87.6547 0.00650262 86.4947 0.00650262 85.3347C0.00650262 83.7647 0.156492 83.5747 1.77649 83.5647C4.33649 83.5647 6.89651 83.5647 9.45651 83.5047C11.294 83.4895 13.1232 83.2579 14.9065 82.8147C15.5536 82.6697 16.1595 82.3803 16.679 81.9681C17.1985 81.556 17.6181 81.0318 17.9065 80.4347C18.6931 78.9524 19.2558 77.3618 19.5765 75.7147C19.7565 74.7147 20.1865 74.3647 21.2365 74.3747C31.3565 74.3747 41.4765 74.3747 51.5865 74.3747C60.4665 74.3747 69.3465 74.3747 78.2265 74.3747C78.5471 74.3306 78.8729 74.4006 79.1471 74.5725C79.4212 74.7443 79.6263 75.007 79.7265 75.3147C80.1155 76.2649 80.7812 77.0762 81.6371 77.6433C82.4931 78.2104 83.4998 78.507 84.5265 78.4947C87.3265 78.5347 90.1265 78.5347 92.9265 78.4947C94.0055 78.5097 95.0631 78.1938 95.957 77.5895C96.851 76.9852 97.5383 76.1215 97.9265 75.1147C97.9882 74.8744 98.1369 74.6656 98.3439 74.5288C98.5509 74.3921 98.8013 74.3371 99.0465 74.3747C101.447 74.3747 103.846 74.3747 106.246 74.3747C106.533 74.3327 106.826 74.3942 107.071 74.5481C107.317 74.702 107.499 74.9383 107.586 75.2147C107.984 76.2078 108.676 77.0549 109.57 77.6416C110.465 78.2282 111.517 78.526 112.586 78.4947C123.186 78.4947 133.787 78.4947 144.387 78.4947C145.459 78.5222 146.514 78.2195 147.408 77.6274C148.302 77.0353 148.993 76.1825 149.387 75.1847C149.459 74.9238 149.624 74.698 149.85 74.5491C150.076 74.4001 150.348 74.3382 150.616 74.3747C153.776 74.3747 156.936 74.3747 160.096 74.3747C160.77 74.3972 161.44 74.4843 162.096 74.6347C162.43 74.7104 162.733 74.8842 162.966 75.1338C163.2 75.3833 163.353 75.6971 163.406 76.0347C163.907 78.0969 164.899 80.0077 166.297 81.6047C166.797 82.23 167.436 82.7307 168.163 83.0673C168.89 83.404 169.686 83.5674 170.487 83.5447C174.567 83.5447 178.636 83.5447 182.716 83.6047C183.276 83.6047 183.827 83.6847 184.377 83.7247V89.9447Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.376 59.9447C183.986 60.4647 183.376 60.4247 182.856 60.4147C178.856 60.4147 174.856 60.4147 170.856 60.4147C169.67 60.3544 168.494 60.6545 167.482 61.2757C166.47 61.8969 165.669 62.8099 165.186 63.8947C164.372 65.4031 163.753 67.0094 163.346 68.6747C163.29 69.2422 163.018 69.7665 162.586 70.1389C162.154 70.5113 161.596 70.7031 161.026 70.6747H150.106C149.606 70.6747 149.446 70.3747 149.226 70.0247C148.695 69.1013 147.919 68.3428 146.984 67.8328C146.048 67.3228 144.99 67.0812 143.926 67.1347C133.7 67.1347 123.463 67.1347 113.216 67.1347C112.153 67.0772 111.096 67.3196 110.164 67.8341C109.232 68.3486 108.464 69.1146 107.946 70.0447C107.845 70.2572 107.68 70.4325 107.473 70.5456C107.267 70.6587 107.03 70.7038 106.796 70.6747C104.156 70.6747 101.516 70.6747 98.8763 70.6747C98.6451 70.689 98.415 70.6325 98.2167 70.5129C98.0184 70.3932 97.8613 70.2159 97.7663 70.0047C97.2363 69.0785 96.4587 68.3184 95.5208 67.8097C94.5828 67.3009 93.5216 67.0637 92.4563 67.1247C90.0629 67.1247 87.6663 67.1247 85.2663 67.1247C84.2015 67.0622 83.1408 67.3035 82.2078 67.8204C81.2748 68.3374 80.5078 69.1087 79.9963 70.0447C79.5963 70.7547 79.0763 70.6547 78.4963 70.6547H29.5463C26.8663 70.6547 24.1863 70.6547 21.5463 70.6547C20.7163 70.6547 20.2563 70.4347 20.1063 69.4947C19.2563 63.8047 16.0163 60.9747 10.2463 60.5947C7.36625 60.3947 4.49625 60.3847 1.61625 60.3747C0.316248 60.3747 0.0562673 60.1247 0.136267 58.8247C0.216254 57.5893 0.216254 56.3501 0.136267 55.1147C0.0462673 53.7347 0.276266 53.4947 1.66627 53.4947C6.22627 53.4947 10.7863 53.478 15.3463 53.4447C17.0372 53.424 18.7182 53.1819 20.3463 52.7247C21.1059 52.5541 21.8027 52.1743 22.3576 51.6282C22.9126 51.0821 23.3035 50.3915 23.4863 49.6347C24.0563 47.6947 24.8663 45.8147 25.5663 43.9147C25.6877 43.5094 25.9472 43.1595 26.2997 42.9256C26.6523 42.6918 27.0757 42.5888 27.4963 42.6347C30.4963 42.6347 33.4963 42.6347 36.4963 42.6347C36.746 42.6182 36.995 42.6758 37.212 42.8004C37.4291 42.9249 37.6045 43.1108 37.7163 43.3347C38.2299 44.1913 38.9661 44.8928 39.8464 45.3647C40.7268 45.8365 41.7185 46.0612 42.7163 46.0147H50.2863C51.2899 46.0617 52.2871 45.8319 53.1689 45.3505C54.0507 44.869 54.7832 44.1544 55.2863 43.2847C55.4016 43.063 55.5827 42.8825 55.8047 42.7679C56.0267 42.6533 56.2788 42.6103 56.5263 42.6447C59.1663 42.6447 61.8063 42.6447 64.4463 42.6447C64.6941 42.6239 64.9423 42.6787 65.1583 42.8019C65.3743 42.9251 65.548 43.1108 65.6563 43.3347C66.1565 44.1815 66.8753 44.8781 67.7375 45.3514C68.5996 45.8247 69.5733 46.0573 70.5563 46.0247H121.906C122.889 46.0608 123.864 45.8331 124.729 45.3653C125.594 44.8976 126.318 44.2068 126.826 43.3647C126.95 43.123 127.145 42.9247 127.384 42.7961C127.624 42.6675 127.896 42.6147 128.166 42.6447C129.646 42.6447 131.166 42.6447 132.606 42.6447C132.876 42.6178 133.146 42.6756 133.381 42.8101C133.616 42.9445 133.803 43.1489 133.916 43.3947C134.411 44.2218 135.118 44.9017 135.963 45.3641C136.809 45.8264 137.763 46.0545 138.726 46.0247C140.246 46.0247 141.766 46.0247 143.286 46.0247C144.25 46.0528 145.204 45.8217 146.048 45.3556C146.893 44.8895 147.596 44.2054 148.086 43.3747C148.204 43.1318 148.394 42.9313 148.631 42.8006C148.867 42.67 149.138 42.6155 149.406 42.6447C151.126 42.6447 152.846 42.6447 154.566 42.6447C155.249 42.5943 155.931 42.7604 156.514 43.1195C157.098 43.4785 157.553 44.0121 157.816 44.6447C158.216 45.4747 158.586 46.3147 158.956 47.1447C160.836 51.2847 164.126 53.2247 168.586 53.4847C173.226 53.7547 177.856 53.6747 182.496 53.4847C183.216 53.4847 183.956 53.4047 184.416 54.1347L184.376 59.9447Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.376 29.7049C183.986 30.4249 183.316 30.4249 182.616 30.4249C175.616 30.4249 168.536 30.4249 161.496 30.4249C159.696 30.4249 157.906 30.4949 156.116 30.6649C153.186 30.9349 151.936 33.8449 153.466 35.7449C153.924 36.3983 154.328 37.0871 154.676 37.8049C155.076 38.5049 154.806 38.9149 154.076 38.9349C152.476 38.9949 150.876 38.9349 149.276 38.9349C148.836 38.9349 148.716 38.6749 148.556 38.3049C148.116 37.157 147.313 36.1838 146.27 35.5325C145.228 34.8812 144.001 34.5872 142.776 34.6949C141.416 34.6949 140.056 34.6949 138.696 34.6949C137.591 34.6533 136.499 34.9524 135.569 35.5515C134.639 36.1507 133.915 37.0211 133.496 38.0449C133.41 38.3422 133.218 38.5977 132.957 38.7635C132.695 38.9292 132.382 38.9937 132.076 38.9449C130.886 38.8849 129.676 38.9449 128.476 38.9449C128.206 38.9858 127.931 38.9286 127.7 38.7836C127.469 38.6387 127.297 38.4156 127.216 38.1549C126.794 37.0883 126.047 36.181 125.082 35.5604C124.117 34.9398 122.982 34.6371 121.836 34.6949H70.6063C69.4605 34.6372 68.3253 34.9387 67.3591 35.5572C66.3928 36.1756 65.6437 37.0803 65.2163 38.1449C64.9563 38.7049 64.7063 38.9449 64.0963 38.9449C61.6563 38.9449 59.2163 38.9449 56.7763 38.9449C56.526 38.971 56.2746 38.9082 56.0661 38.7674C55.8576 38.6266 55.7055 38.4168 55.6363 38.1749C55.2139 37.1073 54.468 36.1987 53.5032 35.5765C52.5384 34.9542 51.403 34.6494 50.2563 34.7049H42.5763C41.4508 34.6528 40.3369 34.9508 39.3877 35.5579C38.4386 36.165 37.7009 37.0513 37.2763 38.0949C37.1934 38.3711 37.0154 38.6091 36.7737 38.7665C36.5321 38.9239 36.2425 38.9907 35.9563 38.9549C33.7563 38.9549 31.5563 38.9549 29.3663 38.9549C28.1263 38.9549 27.9963 38.7049 28.5463 37.6349C29.0963 36.5649 29.7363 35.5449 30.2863 34.5449C31.5963 32.0549 30.6463 30.4549 27.8563 30.4549H1.85629C0.206291 30.4549 0.0562798 30.2749 0.12628 28.6749C0.17628 27.5149 0.12628 26.3549 0.12628 25.2049C0.12628 24.0549 0.586277 23.5749 1.68628 23.6049C2.12628 23.6049 2.56628 23.6049 3.00628 23.6049C13.7263 23.6049 24.4463 23.6049 35.1663 23.6049C36.2165 23.6409 37.2619 23.4486 38.2305 23.0411C39.1991 22.6337 40.0677 22.0208 40.7763 21.2449C50.5833 11.0307 63.3257 4.12127 77.2363 1.47488C98.6663 -2.66512 118.096 1.92489 135.506 15.0649C137.624 16.6398 139.629 18.3607 141.506 20.2149C142.674 21.3691 144.069 22.2668 145.603 22.8506C147.138 23.4343 148.777 23.6913 150.416 23.6049C161.056 23.6049 171.686 23.6049 182.326 23.5449C183.076 23.5449 183.866 23.4549 184.376 24.2049V29.7049Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.377 255.065C184.188 255.239 183.965 255.371 183.722 255.454C183.48 255.537 183.222 255.568 182.967 255.545C173.167 255.545 163.367 255.545 153.567 255.545C153.149 255.584 152.728 255.513 152.347 255.337C151.966 255.161 151.638 254.888 151.397 254.545C150.887 253.755 151.487 253.105 151.877 252.465C152.267 251.825 152.727 251.115 153.137 250.465C153.32 250.251 153.428 249.982 153.445 249.7C153.461 249.418 153.384 249.139 153.227 248.905C152.867 248.425 152.367 248.465 151.817 248.545C151.321 248.609 150.845 248.78 150.422 249.046C149.999 249.312 149.639 249.666 149.367 250.085C148.855 250.856 148.152 251.482 147.326 251.9C146.501 252.319 145.581 252.517 144.657 252.475C143.217 252.475 141.777 252.475 140.337 252.475C139.335 252.517 138.339 252.304 137.442 251.856C136.545 251.408 135.776 250.741 135.207 249.915C134.809 249.31 134.27 248.811 133.635 248.464C133 248.116 132.289 247.929 131.566 247.92C130.842 247.911 130.127 248.081 129.484 248.413C128.84 248.745 128.288 249.23 127.877 249.825C127.246 250.701 126.406 251.403 125.432 251.868C124.459 252.333 123.384 252.545 122.307 252.485C105.107 252.485 87.9066 252.485 70.7066 252.485C69.7474 252.536 68.7898 252.36 67.9109 251.973C67.0319 251.586 66.2563 250.997 65.6466 250.255C65.0946 249.513 64.3591 248.927 63.5122 248.556C62.6654 248.184 61.7364 248.039 60.8166 248.135C60.0175 248.19 59.2157 248.19 58.4166 248.135C57.6161 248.065 56.8116 248.214 56.0894 248.567C55.3671 248.919 54.7543 249.461 54.3166 250.135C53.8093 250.885 53.1182 251.492 52.3093 251.898C51.5004 252.304 50.6008 252.496 49.6966 252.455C47.0566 252.455 44.4166 252.455 41.7766 252.455C40.7884 252.52 39.8012 252.316 38.9204 251.863C38.0397 251.41 37.2986 250.727 36.7766 249.885C36.4495 249.307 35.9643 248.835 35.378 248.523C34.7917 248.211 34.1286 248.073 33.4666 248.125C32.4666 248.125 31.4666 248.125 30.4666 248.125C29.4666 248.125 29.0466 248.745 29.5666 249.715C30.0866 250.685 30.5666 251.345 31.0466 252.185C31.2851 252.502 31.4288 252.881 31.4609 253.277C31.493 253.672 31.4123 254.069 31.228 254.421C31.0438 254.773 30.7636 255.065 30.42 255.264C30.0764 255.463 29.6834 255.56 29.2866 255.545C28.9536 255.567 28.6196 255.567 28.2866 255.545H1.8866C0.116597 255.545 0.0166016 255.445 0.0166016 253.745V234.175C0.0166016 232.665 0.166586 232.525 1.65659 232.525H18.5766C21.5766 232.525 22.5166 233.195 23.4066 236.075C24.0566 238.165 24.8766 240.195 25.7166 242.225C25.9487 242.979 26.4411 243.626 27.1059 244.051C27.7707 244.476 28.5648 244.651 29.3466 244.545C31.2166 244.385 33.0966 244.715 34.9666 244.325C35.8004 244.195 36.5579 243.765 37.0966 243.115C37.6088 242.445 38.2709 241.904 39.0298 241.536C39.7887 241.168 40.6232 240.983 41.4666 240.995C44.466 240.846 47.4717 240.883 50.4666 241.105C51.7141 241.189 52.8798 241.756 53.7166 242.685C54.2676 243.346 54.9726 243.861 55.7695 244.185C56.5664 244.51 57.4308 244.633 58.2866 244.545C59.3966 244.485 60.5266 244.545 61.6466 244.545C63.1827 244.568 64.6727 244.019 65.8266 243.005C66.5832 242.293 67.4773 241.743 68.454 241.389C69.4307 241.035 70.4695 240.884 71.5066 240.945C88.3466 240.945 105.187 240.945 122.027 240.945C122.307 240.945 122.587 240.945 122.867 240.945C123.748 240.947 124.618 241.144 125.415 241.521C126.211 241.898 126.915 242.445 127.477 243.125C127.798 243.51 128.198 243.82 128.65 244.036C129.102 244.252 129.596 244.367 130.097 244.375C131.139 244.568 132.212 244.516 133.231 244.223C134.25 243.929 135.186 243.403 135.967 242.685C137.041 241.638 138.468 241.032 139.967 240.985C141.966 240.806 143.979 240.86 145.967 241.145C146.507 241.196 147.032 241.354 147.511 241.609C147.99 241.865 148.414 242.214 148.757 242.635C150.157 244.695 152.117 244.545 154.117 244.215C155 244.148 155.839 243.803 156.514 243.23C157.189 242.657 157.666 241.885 157.877 241.025C158.327 239.375 159.177 237.845 159.627 236.195C159.803 235.371 160.222 234.619 160.83 234.037C161.438 233.454 162.206 233.066 163.037 232.925C163.921 232.686 164.831 232.552 165.747 232.525H182.907C183.18 232.489 183.459 232.512 183.723 232.593C183.987 232.674 184.23 232.811 184.437 232.995L184.377 255.065Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.377 195.065C184.185 195.235 183.962 195.364 183.72 195.447C183.478 195.529 183.222 195.562 182.967 195.545C176.967 195.545 171.047 195.545 165.087 195.545C163.849 195.626 162.623 195.27 161.621 194.539C160.619 193.808 159.906 192.748 159.607 191.545C157.907 186.455 154.787 184.085 148.927 184.045C129.047 183.935 109.167 184.045 89.2866 184.045C88.4669 183.985 87.6468 184.156 86.92 184.54C86.1932 184.924 85.5891 185.504 85.1766 186.215C84.6726 186.996 83.9668 187.625 83.1341 188.037C82.3014 188.449 81.3728 188.628 80.4466 188.555C69.8533 188.595 59.2566 188.595 48.6566 188.555C47.6091 188.6 46.5698 188.352 45.655 187.84C44.7402 187.328 43.9859 186.571 43.4766 185.655C43.1871 185.123 42.7498 184.686 42.2175 184.397C41.6852 184.108 41.0806 183.978 40.4766 184.025C37.2766 184.075 34.0766 184.025 30.8766 184.025C29.8704 184.031 28.8666 184.125 27.8766 184.305C27.3364 184.371 26.8255 184.587 26.4015 184.928C25.9774 185.269 25.6571 185.722 25.4766 186.235C24.7047 187.988 24.0369 189.784 23.4766 191.615C23.2824 192.671 22.7193 193.624 21.8878 194.304C21.0562 194.983 20.0103 195.345 18.9366 195.325C12.9366 195.815 7.01659 195.445 1.06659 195.555C0.266589 195.555 0.0166016 195.205 0.0166016 194.475C0.0166016 187.555 0.0166016 180.635 0.0166016 173.715C0.0166016 172.855 0.336593 172.525 1.22659 172.525C11.0266 172.525 20.8266 172.525 30.6266 172.525C31.1566 172.525 31.6266 172.525 31.9866 173.075C32.3466 173.625 31.9866 174.075 31.6866 174.595C30.7666 176.055 29.8766 177.515 29.0066 178.995C28.4266 179.995 28.6466 180.435 29.7566 180.445C33.8366 180.445 37.9166 180.445 41.9966 180.445C42.356 180.441 42.7086 180.347 43.0228 180.172C43.3369 179.998 43.6028 179.748 43.7966 179.445C44.3427 178.677 45.0752 178.059 45.9254 177.652C46.7756 177.244 47.7154 177.06 48.6566 177.115H80.4566C81.9081 177.059 83.3233 177.576 84.3966 178.555C85.1183 179.215 85.9633 179.727 86.8831 180.06C87.803 180.392 88.7794 180.541 89.7566 180.495C108.677 180.495 127.593 180.495 146.507 180.495C147.947 180.539 149.382 180.294 150.727 179.775C152.64 178.975 153.1 177.668 152.107 175.855C150.957 173.775 151.627 172.575 154.007 172.575C163.607 172.575 173.207 172.575 182.807 172.525C183.08 172.486 183.359 172.51 183.621 172.597C183.883 172.684 184.121 172.83 184.317 173.025L184.377 195.065Z"
				fill="#1D1D1B"
			/>
			<path
				d="M184.377 225.065C183.909 225.431 183.318 225.603 182.727 225.545C179.207 225.545 175.727 225.545 172.167 225.545C170.531 225.661 168.902 225.245 167.522 224.361C166.142 223.476 165.084 222.169 164.507 220.635C163.087 217.125 160.577 215.835 157.077 215.745C155.557 215.683 154.036 215.747 152.527 215.935C151.69 216.057 150.93 216.488 150.397 217.145C149.768 217.871 148.981 218.444 148.098 218.82C147.214 219.196 146.256 219.365 145.297 219.315C134.937 219.315 124.577 219.315 114.217 219.315C113.236 219.38 112.255 219.203 111.359 218.801C110.462 218.398 109.679 217.781 109.077 217.005C108.757 216.593 108.343 216.264 107.87 216.045C107.396 215.825 106.878 215.723 106.357 215.745C104.557 215.745 102.757 215.695 100.957 215.745C100.232 215.723 99.5127 215.879 98.8623 216.2C98.212 216.521 97.6503 216.996 97.2267 217.585C96.8102 218.149 96.2612 218.602 95.6281 218.904C94.9949 219.205 94.2973 219.347 93.5966 219.315C90.5966 219.315 87.6766 219.315 84.7166 219.315C83.9927 219.332 83.2747 219.18 82.6189 218.873C81.9631 218.566 81.3873 218.112 80.9366 217.545C80.4387 216.921 79.7957 216.428 79.0637 216.109C78.3317 215.79 77.5329 215.654 76.7367 215.715C59.15 215.715 41.5567 215.715 23.9567 215.715C23.5569 215.695 23.1564 215.695 22.7567 215.715C20.6267 215.915 20.2266 216.345 20.2766 218.475C20.3139 219.216 20.1911 219.958 19.9168 220.648C19.6425 221.338 19.2229 221.961 18.6866 222.475C16.7466 224.315 14.6867 225.765 11.7367 225.565C8.35666 225.335 4.93666 225.475 1.54666 225.565C0.426661 225.565 0.0766602 225.185 0.0766602 224.105C0.0766602 217.425 0.0766602 210.745 0.0766602 204.105C0.0766602 202.655 0.166656 202.575 1.66666 202.575H13.0667C14.8989 202.596 16.65 203.334 17.9438 204.632C19.2376 205.929 19.9711 207.682 19.9867 209.515C19.9867 209.835 19.9867 210.155 19.9867 210.515C19.9867 211.865 20.3167 212.215 21.6767 212.215H76.8567C77.5941 212.279 78.3344 212.129 78.9888 211.783C79.6432 211.437 80.1841 210.91 80.5467 210.265C80.9217 209.621 81.4526 209.083 82.0905 208.698C82.7283 208.314 83.4526 208.096 84.1967 208.065C87.6251 207.778 91.0724 207.801 94.4966 208.135C95.2988 208.221 96.0635 208.519 96.7121 208.999C97.3606 209.479 97.8696 210.123 98.1866 210.865C98.3655 211.33 98.698 211.721 99.1289 211.972C99.5599 212.223 100.064 212.319 100.557 212.245C102.117 212.155 103.677 212.245 105.237 212.245C105.979 212.287 106.72 212.138 107.389 211.813C108.058 211.487 108.632 210.995 109.057 210.385C109.625 209.582 110.389 208.937 111.276 208.512C112.164 208.086 113.145 207.895 114.127 207.955H145.197C146.298 207.881 147.399 208.1 148.39 208.588C149.38 209.076 150.224 209.817 150.837 210.735C151.179 211.255 151.655 211.673 152.214 211.945C152.774 212.218 153.396 212.335 154.017 212.285C156.295 212.349 158.571 212.11 160.787 211.575C161.497 211.401 162.15 211.042 162.677 210.535C163.204 210.027 163.587 209.389 163.787 208.685C165.087 204.935 167.687 202.405 172.067 202.615C175.697 202.795 179.337 202.665 182.977 202.615C183.231 202.572 183.491 202.593 183.735 202.675C183.98 202.757 184.2 202.898 184.377 203.085V225.065Z"
				fill="#1D1D1B"
			/>
			<path
				d="M96.5366 285.545C97.5034 285.229 98.5216 285.1 99.5366 285.165C111.755 283.969 123.453 279.62 133.487 272.545C136.291 270.621 138.927 268.463 141.367 266.095C142.552 264.906 143.971 263.976 145.533 263.363C147.096 262.75 148.769 262.468 150.447 262.535C161.167 262.595 171.887 262.535 182.607 262.535C182.918 262.492 183.235 262.511 183.539 262.592C183.843 262.673 184.128 262.813 184.377 263.005C184.377 270.205 184.377 277.405 184.377 284.605C184.377 285.435 184.207 285.605 183.377 285.605C154.443 285.565 125.497 285.545 96.5366 285.545Z"
				fill="#1D1D1B"
			/>
			<path
				d="M0.0566406 285.545C0.0566406 279.398 0.0566406 273.248 0.0566406 267.095C0.0566406 266.095 0.0566406 265.095 0.0566406 264.095C0.0566406 262.695 0.246657 262.525 1.66666 262.525H34.2867C34.9667 262.525 35.6467 262.525 36.2867 262.525C38.1365 262.607 39.8868 263.386 41.1866 264.705C51.8536 275.296 65.5811 282.265 80.4267 284.625C82.6987 285.058 85.004 285.292 87.3167 285.325C87.5867 285.325 87.8867 285.245 88.0767 285.535L0.0566406 285.545Z"
				fill="#1D1D1B"
			/>
		</svg>
	)
}

export default LogoSquare
