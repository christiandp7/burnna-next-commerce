import React, { FC } from 'react'

interface Props {
	className?: string
}

const LogoFull: FC<Props> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="100%"
			height="auto"
			viewBox="0 0 378 130"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M83.7299 75.053C83.5039 75.1988 83.2388 75.2721 82.9699 75.263H68.3599C67.6203 75.2758 66.8855 75.1409 66.1987 74.8661C65.5118 74.5914 64.8867 74.1824 64.3599 73.663C59.6391 69.1934 53.6922 66.2338 47.2799 65.163C46.1348 64.9627 44.9718 64.8823 43.8099 64.923C41.8099 64.973 39.8099 64.843 37.7599 65.003C35.2531 65.2349 32.7901 65.8102 30.4399 66.713C25.9827 68.3072 21.9472 70.8961 18.6399 74.283C18.3262 74.6171 17.9439 74.8795 17.5193 75.0521C17.0947 75.2247 16.6378 75.3034 16.1799 75.283C11.0333 75.283 5.88993 75.283 0.749931 75.283C0.0199314 75.283 0.0199357 75.283 0.0199357 74.573C0.0199357 71.633 0.0199357 68.683 0.0199357 65.743C0.0199357 64.923 0.0999351 64.833 0.909935 64.833H34.91C35.1329 64.8447 35.3562 64.8176 35.5699 64.753L33.3899 64.173C28.0283 62.6971 23.1265 59.8902 19.1399 56.013C18.7305 55.6128 18.2456 55.2979 17.7134 55.0868C17.1812 54.8756 16.6124 54.7723 16.0399 54.783H0.899941C0.0199406 54.783 -0.0400698 54.723 0.0299302 53.843C0.05992 53.3735 0.05992 52.9025 0.0299302 52.433C0.0299302 51.753 0.0899345 51.653 0.799934 51.653C1.50993 51.653 2.38993 51.653 3.18993 51.653H11.8099C12.0985 51.6474 12.3848 51.6003 12.6599 51.513C12.8753 51.4776 13.0792 51.3917 13.2549 51.2623C13.4306 51.1328 13.5731 50.9636 13.6707 50.7684C13.7683 50.5732 13.8182 50.3576 13.8163 50.1394C13.8145 49.9211 13.7609 49.7065 13.6599 49.513C13.6599 49.393 13.5699 49.273 13.5199 49.153C13.3499 48.673 13.4499 48.523 13.9699 48.513H19.6299C19.7362 48.5075 19.8418 48.5341 19.9327 48.5894C20.0237 48.6447 20.0959 48.7261 20.1399 48.823C20.3822 49.2106 20.7224 49.5274 21.1262 49.7416C21.53 49.9558 21.9832 50.0598 22.4399 50.043H36.4999C36.948 50.0609 37.3929 49.9603 37.7897 49.7513C38.1865 49.5424 38.5211 49.2325 38.7599 48.853C38.8161 48.7441 38.9027 48.654 39.0093 48.5936C39.1158 48.5332 39.2377 48.5052 39.3599 48.513H69.2299C69.7499 48.513 69.8399 48.673 69.5799 49.133C69.4799 49.303 69.3599 49.463 69.2599 49.643C69.1394 49.8368 69.0717 50.0588 69.0634 50.2869C69.0551 50.515 69.1066 50.7413 69.2127 50.9434C69.3188 51.1455 69.4759 51.3164 69.6683 51.4391C69.8608 51.5618 70.082 51.6321 70.3099 51.643C70.7199 51.643 71.1399 51.643 71.5599 51.643H82.8399C83.1799 51.643 83.5399 51.593 83.7699 51.943V54.563C83.6099 54.833 83.3399 54.773 83.0899 54.773C78.2099 54.773 73.3199 54.773 68.4299 54.773C67.6404 54.7592 66.856 54.9014 66.1215 55.1914C65.387 55.4814 64.717 55.9135 64.1499 56.463C59.8706 60.5084 54.5597 63.297 48.7999 64.523C48.5199 64.583 48.1899 64.523 47.9299 64.833H82.9299C83.0798 64.8068 83.2341 64.8229 83.3753 64.8794C83.5166 64.936 83.6394 65.0307 83.7299 65.153V75.053Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.7299 40.9232C83.6261 41.0083 83.5062 41.0717 83.3773 41.1095C83.2485 41.1473 83.1133 41.1587 82.9799 41.1431C80.6399 41.1431 78.2899 41.1431 75.9799 41.1431C75.2866 41.0779 74.5911 41.2435 74.0016 41.6142C73.4121 41.9849 72.9615 42.54 72.7199 43.1932C72.3599 44.0032 71.9599 44.7931 71.6199 45.6131C71.4834 45.9915 71.2266 46.3147 70.8888 46.5333C70.5511 46.7518 70.1511 46.8536 69.7499 46.8232H39.75C39.37 46.8232 39.1399 46.8232 38.9599 46.3432C38.7892 45.8877 38.4784 45.4982 38.0724 45.2305C37.6663 44.9627 37.1858 44.8307 36.6999 44.8532H22.2399C21.7276 44.8354 21.2231 44.9821 20.8002 45.2718C20.3774 45.5615 20.0584 45.979 19.8899 46.4632C19.8613 46.5819 19.7884 46.6852 19.6862 46.7521C19.584 46.819 19.4602 46.8444 19.3399 46.8232H13.0699C12.8421 46.8485 12.6124 46.7948 12.4194 46.671C12.2265 46.5472 12.0819 46.3608 12.0099 46.1431C11.6199 45.2031 11.2099 44.2732 10.8299 43.3432C10.6262 42.6767 10.2032 42.0986 9.62956 41.7029C9.05591 41.3072 8.36531 41.1169 7.66993 41.1632C5.35993 41.1632 3.04994 41.1632 0.739941 41.1632C0.0399407 41.1632 -5.51065e-05 41.1032 0.00994489 40.4132C0.00994489 39.8932 0.00994489 39.3632 0.00994489 38.8432C0.00994489 38.1232 0.0699327 38.0332 0.809933 38.0332C1.96993 38.0332 3.13994 38.0332 4.29994 38.0332C5.13244 38.0249 5.96123 37.9209 6.76994 37.7232C7.06323 37.657 7.33782 37.5255 7.57328 37.3385C7.80874 37.1515 7.99901 36.9138 8.12994 36.6431C8.48193 35.9653 8.73772 35.2417 8.88993 34.4932C8.96993 34.0232 9.15993 33.8832 9.63993 33.8832C14.2399 33.8832 18.8299 33.8832 23.4299 33.8832H35.5299C35.6746 33.8617 35.8222 33.8921 35.9466 33.969C36.0711 34.0458 36.1643 34.1642 36.2099 34.3032C36.3903 34.7346 36.6947 35.1028 37.0846 35.361C37.4745 35.6191 37.9323 35.7556 38.3999 35.7532H42.2099C42.7028 35.7655 43.1875 35.6251 43.5975 35.3512C44.0075 35.0773 44.3227 34.6833 44.5 34.2232C44.5304 34.1129 44.6 34.0176 44.6958 33.955C44.7915 33.8924 44.9067 33.8669 45.0199 33.8832C46.1099 33.8832 47.1999 33.8832 48.2899 33.8832C48.4185 33.8674 48.5485 33.8966 48.6579 33.9659C48.7673 34.0352 48.8493 34.1402 48.8899 34.2632C49.0701 34.7142 49.3844 35.099 49.7904 35.3655C50.1964 35.632 50.6745 35.7673 51.16 35.7532H65.6199C66.1046 35.763 66.5807 35.6247 66.9845 35.3566C67.3884 35.0886 67.7008 34.7036 67.8799 34.2532C67.9127 34.1342 67.9875 34.0311 68.0905 33.9631C68.1935 33.895 68.3176 33.8666 68.4399 33.8832H72.7499C73.056 33.8985 73.3604 33.9386 73.66 34.0032C73.8126 34.0374 73.9515 34.1167 74.0584 34.2308C74.1654 34.345 74.2356 34.4886 74.2599 34.6431C74.4814 35.5816 74.9314 36.4507 75.5699 37.1732C75.7933 37.4476 76.0756 37.6683 76.3959 37.8189C76.7161 37.9695 77.0661 38.0461 77.4199 38.0432C79.2699 38.0432 81.1299 38.0432 82.9799 38.0432C83.2299 38.0432 83.4799 38.0432 83.7299 38.0932V40.9232Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.7299 27.2828C83.5499 27.5128 83.2999 27.4928 83.0399 27.4928H77.5899C77.0511 27.4671 76.5171 27.6054 76.0583 27.8892C75.5995 28.173 75.2375 28.5891 75.0199 29.0828C74.6482 29.7661 74.3691 30.4958 74.1899 31.2528C74.1645 31.511 74.0397 31.7492 73.8419 31.9172C73.6441 32.0851 73.3888 32.1696 73.1299 32.1528H68.1299C67.9099 32.1528 67.8299 32.0128 67.7299 31.8528C67.4893 31.4346 67.1378 31.091 66.7143 30.8599C66.2909 30.6287 65.8118 30.519 65.3299 30.5428H51.3299C50.8469 30.5182 50.3668 30.6298 49.9442 30.865C49.5216 31.1002 49.1736 31.4494 48.9399 31.8728C48.8908 31.9658 48.8151 32.0421 48.7225 32.0919C48.6299 32.1418 48.5246 32.163 48.4199 32.1528H44.8199C44.7142 32.162 44.6084 32.1381 44.5169 32.0843C44.4255 32.0305 44.3532 31.9496 44.3099 31.8528C44.0702 31.4315 43.7176 31.0856 43.2917 30.8541C42.8659 30.6226 42.3838 30.5148 41.8999 30.5428H38.6299C38.1465 30.5158 37.6654 30.6264 37.2424 30.8618C36.8194 31.0973 36.4718 31.4478 36.2399 31.8728C36.0599 32.1928 35.8199 32.1528 35.5599 32.1528H9.73991C9.35991 32.1528 9.14992 32.0528 9.08992 31.6228C8.69992 29.0428 7.22991 27.7528 4.59991 27.6228C3.29991 27.5328 1.98991 27.5228 0.679912 27.5228C0.0899116 27.5228 -0.0300866 27.4128 0.00991339 26.8228C0.049898 26.2602 0.049898 25.6954 0.00991339 25.1328C0.00991339 24.5028 0.0799103 24.4028 0.70991 24.3928H6.9199C7.68162 24.3882 8.43895 24.2771 9.1699 24.0628C9.5159 23.9877 9.83368 23.8165 10.0867 23.5688C10.3396 23.3212 10.5176 23.0071 10.5999 22.6628C10.8599 21.7828 11.2299 20.9328 11.5499 20.0628C11.6048 19.88 11.7217 19.722 11.8805 19.6161C12.0393 19.5102 12.2301 19.4631 12.4199 19.4828H16.5099C16.6247 19.4733 16.7396 19.4988 16.8395 19.556C16.9395 19.6131 17.0198 19.6991 17.0699 19.8028C17.3039 20.1928 17.6399 20.5116 18.0417 20.7248C18.4434 20.938 18.8958 21.0376 19.3499 21.0128H22.7899C23.2456 21.0338 23.6982 20.9293 24.0986 20.7106C24.4989 20.492 24.8314 20.1676 25.0599 19.7728C25.1111 19.6719 25.1927 19.5896 25.2932 19.5375C25.3936 19.4855 25.508 19.4663 25.6199 19.4828H29.2199C29.3323 19.4717 29.4454 19.4955 29.5438 19.551C29.6422 19.6065 29.7212 19.6909 29.7699 19.7928C29.9961 20.1769 30.3217 20.4929 30.7124 20.7076C31.1031 20.9223 31.5444 21.0277 31.9899 21.0128H55.3199C55.7672 21.0292 56.2109 20.9256 56.6047 20.7129C56.9986 20.5001 57.3284 20.1859 57.5599 19.8028C57.6164 19.6932 57.7053 19.6038 57.8144 19.5465C57.9235 19.4893 58.0477 19.467 58.1699 19.4828C58.8399 19.4828 59.5099 19.4828 60.1699 19.4828C60.2927 19.4709 60.4163 19.4971 60.5236 19.558C60.631 19.6188 60.717 19.7113 60.7699 19.8228C60.9938 20.1985 61.3138 20.5078 61.697 20.7188C62.0802 20.9297 62.5127 21.0346 62.9499 21.0228H65.0199C65.457 21.035 65.8893 20.929 66.2712 20.7161C66.6532 20.5031 66.9705 20.191 67.1899 19.8128C67.2461 19.7023 67.3345 19.6116 67.4435 19.5526C67.5524 19.4937 67.6767 19.4693 67.7999 19.4828C68.5799 19.4828 69.3599 19.4828 70.1399 19.4828C70.4503 19.4636 70.759 19.5407 71.0239 19.7036C71.2888 19.8665 71.4969 20.1072 71.6199 20.3928C71.7999 20.7728 71.9599 21.1528 72.1399 21.5328C72.5018 22.3912 73.1102 23.123 73.8881 23.6356C74.6659 24.1483 75.5783 24.4187 76.5099 24.4128C78.6199 24.5328 80.7199 24.4928 82.8299 24.4128C83.1599 24.4128 83.4899 24.4128 83.6999 24.7128L83.7299 27.2828Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.73 13.553C83.55 13.883 83.25 13.883 82.93 13.883H73.34C72.52 13.883 71.71 13.883 70.89 13.993C70.6207 13.9883 70.3554 14.0586 70.1239 14.1962C69.8923 14.3338 69.7037 14.5332 69.5791 14.772C69.4545 15.0108 69.3988 15.2796 69.4184 15.5483C69.438 15.8169 69.5321 16.0748 69.69 16.293C69.8945 16.5934 70.0783 16.9075 70.24 17.233C70.42 17.553 70.3 17.733 69.97 17.743C69.24 17.743 68.51 17.743 67.79 17.743C67.58 17.743 67.53 17.623 67.46 17.453C67.2599 16.9306 66.8947 16.4879 66.4201 16.1919C65.9454 15.8959 65.3872 15.7629 64.83 15.813C64.21 15.813 63.6 15.813 62.98 15.813C62.4771 15.7948 61.9809 15.9319 61.5586 16.2056C61.1364 16.4793 60.8087 16.8764 60.62 17.343C60.5785 17.4777 60.4902 17.5931 60.371 17.6683C60.2517 17.7435 60.1095 17.7736 59.97 17.753C59.43 17.753 58.88 17.753 58.34 17.753C58.2175 17.7736 58.0916 17.7496 57.9852 17.6854C57.8788 17.6212 57.7989 17.521 57.76 17.403C57.5688 16.9181 57.2308 16.5052 56.7933 16.2219C56.3558 15.9386 55.8407 15.7991 55.32 15.823H32.02C31.5003 15.7968 30.9854 15.9343 30.5477 16.2159C30.1101 16.4975 29.7717 16.9091 29.58 17.393C29.46 17.643 29.35 17.763 29.07 17.753H25.74C25.6261 17.7646 25.5118 17.7359 25.4168 17.672C25.3218 17.6081 25.2522 17.5129 25.22 17.403C25.0301 16.9172 24.6923 16.5034 24.2545 16.22C23.8167 15.9365 23.301 15.7976 22.78 15.823H19.29C18.779 15.8023 18.274 15.9389 17.8431 16.2143C17.4121 16.4897 17.076 16.8906 16.88 17.363C16.8449 17.49 16.7644 17.5998 16.6539 17.6716C16.5434 17.7435 16.4104 17.7724 16.28 17.753C15.28 17.753 14.28 17.753 13.28 17.753C12.72 17.753 12.65 17.643 12.91 17.153C13.17 16.663 13.45 16.213 13.7 15.733C14.3 14.603 13.86 13.873 12.6 13.873H0.800034C0.0500345 13.873 -0.00996433 13.793 0.0200357 13.063C0.0200357 12.543 0.0200357 12.013 0.0200357 11.483C0.0200357 10.953 0.230042 10.743 0.730042 10.763H1.33003C6.20003 10.763 11.07 10.763 15.94 10.763C16.4167 10.7764 16.8908 10.6879 17.3306 10.5034C17.7704 10.3188 18.1656 10.0426 18.49 9.69297C22.9422 5.04697 28.7297 1.90155 35.05 0.692974C39.6455 -0.278168 44.3982 -0.22802 48.9722 0.839871C53.5461 1.90776 57.8297 3.96732 61.52 6.87297C62.4887 7.58182 63.4014 8.36413 64.25 9.21296C64.7764 9.72908 65.4028 10.132 66.0907 10.3968C66.7786 10.6617 67.5135 10.7829 68.25 10.753C73.08 10.753 77.92 10.753 82.75 10.753C83.09 10.753 83.45 10.753 83.68 11.053L83.73 13.553Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.7298 115.933C83.6445 116.012 83.5435 116.073 83.4332 116.111C83.3229 116.149 83.2059 116.163 83.0898 116.153H69.7298C69.5363 116.171 69.3416 116.137 69.1658 116.054C68.99 115.971 68.8394 115.843 68.7298 115.683C68.4998 115.323 68.7298 115.033 68.9498 114.743C69.1698 114.453 69.3298 114.123 69.5198 113.813C69.5968 113.711 69.6385 113.586 69.6385 113.458C69.6385 113.33 69.5968 113.205 69.5198 113.103C69.3598 112.883 69.1297 112.903 68.8797 112.943C68.654 112.969 68.4369 113.045 68.2447 113.166C68.0525 113.287 67.8902 113.45 67.7698 113.643C67.5352 113.992 67.2156 114.275 66.8411 114.465C66.4667 114.656 66.0497 114.748 65.6297 114.733H63.6297C63.1728 114.75 62.7189 114.652 62.3099 114.448C61.9009 114.243 61.55 113.939 61.2897 113.563C61.1072 113.289 60.8597 113.064 60.5692 112.908C60.2787 112.752 59.9543 112.671 59.6248 112.671C59.2952 112.671 58.9708 112.752 58.6803 112.908C58.3899 113.064 58.1423 113.289 57.9598 113.563C57.6761 113.963 57.2948 114.285 56.852 114.497C56.4092 114.708 55.9196 114.803 55.4298 114.773H32.0898C31.6549 114.797 31.2204 114.72 30.8211 114.546C30.4217 114.372 30.0685 114.107 29.7897 113.773C29.5451 113.428 29.2138 113.154 28.8292 112.978C28.4446 112.803 28.0205 112.732 27.5997 112.773C27.2367 112.793 26.8728 112.793 26.5098 112.773C26.1446 112.738 25.777 112.805 25.4472 112.966C25.1174 113.126 24.838 113.374 24.6398 113.683C24.4119 114.024 24.0996 114.3 23.7333 114.484C23.367 114.668 22.9592 114.754 22.5498 114.733H18.9498C18.5025 114.76 18.0562 114.666 17.6582 114.46C17.2603 114.254 16.9256 113.944 16.6898 113.563C16.5402 113.302 16.3201 113.089 16.0548 112.947C15.7895 112.806 15.4897 112.742 15.1898 112.763C14.7298 112.763 14.2798 112.763 13.8198 112.763C13.3598 112.763 13.1798 113.053 13.4098 113.493C13.6398 113.933 13.8698 114.233 14.0898 114.613C14.1804 114.761 14.2307 114.931 14.2357 115.105C14.2408 115.278 14.2005 115.451 14.1187 115.604C14.0369 115.758 13.9165 115.887 13.7694 115.98C13.6223 116.073 13.4535 116.125 13.2798 116.133H0.849762C0.049762 116.133 0.00976562 116.133 0.00976562 115.323V106.433C0.00976562 105.753 0.0697559 105.683 0.749756 105.683H8.43976C9.80976 105.683 10.2298 105.993 10.6298 107.293C10.9298 108.293 11.2998 109.173 11.6298 110.093C11.7373 110.434 11.9617 110.726 12.2635 110.918C12.5653 111.111 12.9251 111.19 13.2798 111.143C14.131 111.165 14.9828 111.131 15.8298 111.043C16.2219 110.996 16.5805 110.799 16.8298 110.493C17.0604 110.18 17.3619 109.926 17.7096 109.753C18.0572 109.579 18.4411 109.49 18.8298 109.493C20.1895 109.425 21.5521 109.441 22.9098 109.543C23.4788 109.578 24.0108 109.837 24.3898 110.263C24.6343 110.549 24.9426 110.775 25.2899 110.921C25.6372 111.067 26.0139 111.129 26.3898 111.103C26.8998 111.103 27.3898 111.103 27.9098 111.103C28.6089 111.119 29.288 110.868 29.8098 110.403C30.1539 110.08 30.56 109.83 31.0034 109.668C31.4469 109.507 31.9185 109.437 32.3898 109.463H55.7298C56.1306 109.463 56.5263 109.553 56.888 109.726C57.2496 109.899 57.5679 110.151 57.8197 110.463C57.9649 110.638 58.1468 110.779 58.3524 110.875C58.5581 110.972 58.7825 111.022 59.0098 111.023C59.4832 111.115 59.9717 111.094 60.4356 110.962C60.8994 110.83 61.3257 110.59 61.6798 110.263C62.168 109.785 62.8171 109.507 63.4998 109.483C64.4032 109.405 65.3126 109.431 66.2098 109.563C66.456 109.586 66.6952 109.658 66.9133 109.775C67.1313 109.892 67.3239 110.051 67.4798 110.243C67.7572 110.606 68.1439 110.871 68.583 110.999C69.0221 111.127 69.4906 111.111 69.9198 110.953C70.3208 110.921 70.7016 110.764 71.0084 110.503C71.3152 110.243 71.5326 109.893 71.6297 109.503C71.8297 108.763 72.2198 108.063 72.4198 107.313C72.5 106.938 72.6904 106.596 72.9666 106.331C73.2429 106.065 73.5922 105.888 73.9698 105.823C74.3719 105.718 74.7844 105.657 75.1998 105.643H83.0198C83.1431 105.626 83.2687 105.636 83.3878 105.672C83.507 105.708 83.6168 105.77 83.7098 105.853L83.7298 115.933Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.7301 88.6831C83.5519 88.8333 83.3225 88.9086 83.0901 88.8931H75.0201C74.46 88.9316 73.9042 88.7727 73.4493 88.4438C72.9943 88.1149 72.6691 87.637 72.5301 87.0931C71.7601 84.7831 70.3401 83.7031 67.6801 83.6831C58.6801 83.6331 49.6101 83.6831 40.5801 83.6831C40.206 83.6577 39.8323 83.738 39.5016 83.9149C39.171 84.0917 38.8967 84.3579 38.7101 84.6831C38.483 85.0372 38.1639 85.3229 37.7869 85.5096C37.41 85.6963 36.9893 85.777 36.5701 85.7431C31.7501 85.7431 26.9334 85.7431 22.1201 85.7431C21.6444 85.7634 21.1724 85.6506 20.7573 85.4174C20.3421 85.1842 20.0003 84.8399 19.7701 84.4231C19.6374 84.1831 19.4389 83.9859 19.198 83.8548C18.9571 83.7237 18.6837 83.6641 18.4101 83.6831C16.9601 83.6831 15.5101 83.6831 14.0501 83.6831C13.5969 83.6817 13.1447 83.7253 12.7001 83.8131C12.4556 83.843 12.2243 83.9402 12.0319 84.0938C11.8394 84.2474 11.6934 84.4514 11.6101 84.6831C11.2631 85.4806 10.9659 86.2989 10.7201 87.1331C10.6285 87.6104 10.372 88.0403 9.99536 88.3475C9.61873 88.6546 9.14603 88.8195 8.66006 88.8131C5.95006 89.0331 3.24007 88.8731 0.54007 88.9231C0.17007 88.9231 0.0600586 88.7631 0.0600586 88.4231C0.0600586 85.2831 0.0600586 82.1398 0.0600586 78.9931C0.0600586 78.6031 0.210062 78.4531 0.610062 78.4531H13.9701C14.2101 78.4531 14.4401 78.4531 14.5901 78.6931C14.7401 78.9331 14.5901 79.1631 14.4501 79.3831C14.0301 80.0531 13.6301 80.7131 13.2301 81.3831C12.9701 81.8331 13.0701 82.0431 13.5801 82.0431C15.4301 82.0431 17.2801 82.0431 19.1401 82.0431C19.3032 82.0368 19.4623 81.9907 19.6035 81.9088C19.7447 81.8269 19.8637 81.7116 19.9501 81.5731C20.1997 81.225 20.5331 80.9454 20.9194 80.7602C21.3056 80.5749 21.7323 80.49 22.1601 80.5131H36.6101C37.2702 80.49 37.913 80.727 38.4001 81.1731C38.7273 81.4725 39.1104 81.7043 39.5274 81.8553C39.9444 82.0063 40.387 82.0735 40.8301 82.0531C49.4301 82.0531 58.0234 82.0531 66.6101 82.0531C67.2648 82.0732 67.9172 81.9645 68.5301 81.7331C68.7149 81.693 68.8865 81.6063 69.0284 81.4813C69.1704 81.3563 69.278 81.197 69.3411 81.0187C69.4043 80.8404 69.4207 80.6489 69.3891 80.4624C69.3574 80.2759 69.2786 80.1006 69.1601 79.9531C68.6401 79.0031 68.9401 78.4631 70.0201 78.4631C74.3801 78.4631 78.7401 78.4631 83.1001 78.4631C83.2242 78.4445 83.351 78.4547 83.4707 78.4928C83.5903 78.5309 83.6996 78.5961 83.7901 78.6831L83.7301 88.6831Z"
				fill="#1D1D1B"
			/>
			<path
				d="M83.73 102.283C83.5171 102.449 83.2489 102.528 82.98 102.503C81.38 102.503 79.78 102.503 78.18 102.503C77.4371 102.556 76.6972 102.366 76.0714 101.962C75.4457 101.558 74.968 100.962 74.71 100.263C74.4654 99.5754 74.0029 98.9864 73.3927 98.5856C72.7826 98.1849 72.0583 97.9944 71.33 98.0432C70.6387 98.018 69.9465 98.0481 69.26 98.1332C68.8695 98.1846 68.5125 98.3809 68.26 98.6831C67.9772 99.0181 67.6204 99.2829 67.2178 99.4564C66.8152 99.6299 66.3778 99.7076 65.94 99.6831H51.86C51.4182 99.7181 50.9744 99.6455 50.5669 99.4713C50.1593 99.2971 49.8001 99.0267 49.52 98.6831C49.3747 98.4976 49.1874 98.3492 48.9736 98.2502C48.7598 98.1511 48.5255 98.1041 48.29 98.1131C47.47 98.1131 46.65 98.1131 45.83 98.1131C45.5018 98.1021 45.176 98.1721 44.8812 98.3168C44.5865 98.4616 44.3319 98.6767 44.14 98.9432C43.953 99.2024 43.704 99.4105 43.4157 99.5485C43.1275 99.6866 42.8092 99.75 42.49 99.7332C41.14 99.7332 39.8 99.7332 38.49 99.7332C38.1604 99.739 37.8338 99.6691 37.5356 99.5286C37.2374 99.3882 36.9754 99.181 36.77 98.9232C36.5421 98.6411 36.2494 98.4184 35.9168 98.2739C35.5843 98.1294 35.2217 98.0674 34.86 98.0931H10.3C9.3 98.1931 9.16001 98.3832 9.18001 99.3532C9.19771 99.6889 9.14252 100.025 9.01823 100.337C8.89395 100.649 8.70351 100.931 8.46001 101.163C8.07244 101.62 7.58729 101.984 7.04036 102.228C6.49343 102.472 5.89868 102.59 5.3 102.573C3.76 102.463 2.21 102.573 0.669998 102.573C0.159998 102.573 0 102.403 0 101.913C0 98.9132 0 95.8431 0 92.8131C0 92.1531 1.19209e-06 92.1131 0.720001 92.1131H5.90001C6.73381 92.121 7.53092 92.4571 8.11865 93.0486C8.70639 93.6401 9.03742 94.4393 9.04001 95.2731V95.7032C9.04001 96.3232 9.19 96.4732 9.8 96.4732H34.87C35.2059 96.5012 35.5427 96.4323 35.8405 96.2745C36.1383 96.1167 36.3846 95.8768 36.55 95.5831C36.7193 95.2894 36.9604 95.0436 37.2508 94.8687C37.5412 94.6937 37.8712 94.5955 38.21 94.5831C39.7671 94.4481 41.3329 94.4481 42.89 94.5831C43.2544 94.624 43.6013 94.7614 43.8949 94.9811C44.1885 95.2009 44.4181 95.495 44.56 95.8331C44.6434 96.0434 44.7956 96.2192 44.9917 96.3318C45.1879 96.4444 45.4164 96.4872 45.64 96.4532C46.35 96.4532 47.06 96.4532 47.77 96.4532C48.1057 96.4698 48.4402 96.4016 48.7426 96.2547C49.045 96.1079 49.3055 95.8872 49.5 95.6131C49.7575 95.248 50.1038 94.9544 50.5062 94.7602C50.9087 94.566 51.3539 94.4776 51.8 94.5032H65.92C66.4198 94.4697 66.9196 94.5685 67.369 94.7897C67.8185 95.0109 68.2017 95.3467 68.48 95.7632C68.6355 96.0009 68.8523 96.1924 69.1075 96.3173C69.3626 96.4423 69.6468 96.4961 69.93 96.4732C70.9627 96.4966 71.9943 96.389 73 96.1531C73.3242 96.073 73.6216 95.9087 73.8621 95.677C74.1026 95.4452 74.2778 95.1542 74.37 94.8331C74.5692 94.0035 75.0566 93.2717 75.7453 92.768C76.4339 92.2643 77.279 92.0216 78.13 92.0831C79.78 92.1631 81.43 92.0831 83.13 92.0831C83.2442 92.0632 83.3615 92.072 83.4715 92.1087C83.5814 92.1453 83.6806 92.2087 83.76 92.2932L83.73 102.283Z"
				fill="#1D1D1B"
			/>
			<path
				d="M43.8301 129.783C44.2715 129.638 44.7362 129.577 45.2001 129.603C50.7475 129.058 56.0579 127.08 60.6101 123.863C61.8844 122.99 63.082 122.009 64.1901 120.933C64.7268 120.387 65.371 119.959 66.0819 119.674C66.7928 119.39 67.5549 119.257 68.3201 119.283C73.1901 119.283 78.0601 119.283 82.9301 119.283C83.214 119.245 83.5014 119.321 83.7301 119.493C83.7301 122.763 83.7301 126.033 83.7301 129.303C83.7301 129.683 83.6601 129.753 83.2901 129.753L43.8301 129.783Z"
				fill="#1D1D1B"
			/>
			<path
				d="M0.0200195 129.783C0.0200195 126.993 0.0200195 124.193 0.0200195 121.403C0.0200195 120.943 0.0200195 120.493 0.0200195 120.033C0.0200195 119.403 0.100015 119.323 0.750015 119.323H15.56C15.87 119.323 16.18 119.323 16.49 119.323C17.3344 119.356 18.1333 119.715 18.72 120.323C23.5699 125.116 29.8035 128.265 36.54 129.323C37.5725 129.516 38.6197 129.619 39.67 129.633C39.8 129.633 39.93 129.633 40.02 129.733L0.0200195 129.783Z"
				fill="#1D1D1B"
			/>
			<path
				d="M140.13 64.6032C140.13 69.6532 136.48 74.9832 126.04 74.9832H107.02V72.7432H108.14C109.6 72.7432 109.82 72.5232 109.82 71.0632V40.7532C109.82 39.2932 109.6 39.0632 108.14 39.0632H107.02V36.8232H125.2C135.64 36.8232 138.73 41.5932 138.73 46.6432C138.73 50.9132 136.26 53.7732 132.27 55.2832C137.83 56.7432 140.13 59.8932 140.13 64.6032ZM119.37 39.0632V54.3332H123.02C126.73 54.3332 128.92 53.1032 128.92 46.3332C128.92 40.1632 126.67 39.0332 122.97 39.0332L119.37 39.0632ZM130.31 64.8832C130.31 58.7132 128.07 56.5832 123.24 56.5832H119.37V72.7432H123.24C128.07 72.7432 130.31 70.2132 130.31 64.8832V64.8832Z"
				fill="#1D1D1B"
			/>
			<path
				d="M188.96 39.0632H186.96C185.5 39.0632 185.28 39.2932 185.28 40.7532V60.9532C185.28 70.7832 179.22 75.5532 170.46 75.5532C159.23 75.5532 152.46 70.4932 152.46 60.3932V40.7532C152.46 39.2932 152.23 39.0632 150.78 39.0632H149.65V36.8232H164.81V39.0632H163.68C162.23 39.0632 162 39.2932 162 40.7532V60.3932C162 69.3932 164.81 73.0232 172.38 73.0232C178.11 73.0232 182.71 69.0932 182.71 60.9532V40.7532C182.71 39.2932 182.49 39.0632 181.03 39.0632H179.03V36.8232H188.96V39.0632Z"
				fill="#1D1D1B"
			/>
			<path
				d="M237.23 72.7432V74.9832H230.55C224.49 74.9832 221.23 73.5832 219.89 67.3032C217.98 58.3732 216.97 58.3732 212.03 58.3732H210.03V71.0632C210.03 72.5232 210.25 72.7432 211.71 72.7432H212.83V74.9832H197.66V72.7432H198.78C200.24 72.7432 200.47 72.5232 200.47 71.0632V40.7532C200.47 39.2932 200.24 39.0632 198.78 39.0632H197.66V36.8232H215.56C227.13 36.8232 230.21 42.4332 230.21 47.4832C230.21 51.8032 227.69 55.4832 222.02 57.2532C224.039 57.7958 225.866 58.8925 227.294 60.4195C228.722 61.9464 229.694 63.8425 230.1 65.8932C231.5 71.5632 232.35 72.7432 236.22 72.7432H237.23ZM213.32 56.1332C218.15 56.1332 220.39 54.2232 220.39 47.4832C220.39 40.7432 218.15 39.0632 213.32 39.0632H210.02V56.1332H213.32Z"
				fill="#1D1D1B"
			/>
			<path
				d="M283.37 39.0632H281.68C280.22 39.0632 280 39.2932 280 40.7532V74.9832H277.19L250.25 43.8332V71.0632C250.25 72.5232 250.47 72.7432 251.93 72.7432H253.93V74.9832H244.39V72.7432H246.02C247.48 72.7432 247.7 72.5232 247.7 71.0632V40.7532C247.7 39.2932 247.48 39.0632 246.02 39.0632H244.34V36.8232H256.68L277.45 60.3932V40.7532C277.45 39.2932 277.23 39.0632 275.77 39.0632H273.77V36.8232H283.32L283.37 39.0632Z"
				fill="#1D1D1B"
			/>
			<path
				d="M331.63 39.0632H329.95C328.49 39.0632 328.27 39.2932 328.27 40.7532V74.9832H325.46L298.52 43.8332V71.0632C298.52 72.5232 298.74 72.7432 300.2 72.7432H302.2V74.9832H292.66V72.7432H294.34C295.8 72.7432 296.02 72.5232 296.02 71.0632V40.7532C296.02 39.2932 295.8 39.0632 294.34 39.0632H292.66V36.8232H305.02L325.79 60.3932V40.7532C325.79 39.2932 325.57 39.0632 324.11 39.0632H322.11V36.8232H331.65L331.63 39.0632Z"
				fill="#1D1D1B"
			/>
			<path
				d="M377.66 72.743V74.983H359.42V72.743H362.56C363.62 72.743 363.91 72.183 363.4 71.063L360.26 63.873H347.07L344.15 71.003C343.7 72.123 343.92 72.743 344.99 72.743H347.91V74.983H337.25V72.743H339.1C340.61 72.743 340.84 72.4629 341.4 71.1129L355.94 36.543H358.18L374.02 71.063C374.64 72.463 374.92 72.743 376.33 72.743H377.66ZM359.19 61.353L353.52 48.353L348.13 61.353H359.19Z"
				fill="#1D1D1B"
			/>
			<path
				d="M106.69 99.4932V91.0732H108.93C111.13 91.0732 112.34 92.8932 112.34 95.2832C112.34 97.6732 111.13 99.4932 108.93 99.4932H106.69ZM111.29 95.2832C111.29 93.3832 110.51 91.9732 108.93 91.9732H107.7V98.5932H108.93C110.5 98.5932 111.29 97.1832 111.29 95.2832V95.2832Z"
				fill="#1D1D1B"
			/>
			<path d="M117.95 99.4932V91.0732H118.95V99.4932H117.95Z" fill="#1D1D1B" />
			<path
				d="M124.35 98.583L124.9 97.813C125.144 98.1062 125.45 98.3417 125.796 98.5025C126.142 98.6633 126.519 98.7455 126.9 98.743C127.095 98.7658 127.293 98.7467 127.48 98.687C127.667 98.6273 127.839 98.5284 127.985 98.3968C128.131 98.2652 128.247 98.1041 128.325 97.9241C128.404 97.7441 128.443 97.5494 128.44 97.353C128.44 95.353 124.63 95.853 124.63 93.143C124.633 92.8356 124.7 92.5322 124.825 92.2515C124.951 91.9709 125.132 91.719 125.359 91.5117C125.586 91.3044 125.854 91.1461 126.145 91.0465C126.435 90.9469 126.744 90.9083 127.05 90.933C127.467 90.9183 127.883 90.9908 128.27 91.1457C128.657 91.3007 129.008 91.5348 129.3 91.833L128.78 92.583C128.558 92.3408 128.288 92.1487 127.986 92.0194C127.684 91.89 127.358 91.8265 127.03 91.833C126.855 91.8178 126.679 91.8391 126.513 91.8954C126.346 91.9518 126.193 92.042 126.064 92.1604C125.934 92.2788 125.83 92.4228 125.759 92.5833C125.688 92.7439 125.651 92.9174 125.65 93.093C125.65 94.873 129.46 94.483 129.46 97.293C129.469 97.6224 129.408 97.95 129.279 98.2535C129.151 98.557 128.959 98.8294 128.716 99.0522C128.474 99.2751 128.186 99.4432 127.872 99.5451C127.559 99.647 127.228 99.6804 126.9 99.643C126.424 99.6624 125.949 99.5776 125.508 99.3945C125.068 99.2114 124.673 98.9345 124.35 98.583V98.583Z"
				fill="#1D1D1B"
			/>
			<path
				d="M134.96 99.4932V91.0732H139.28V91.9732H136.02V94.7332H139.25V95.6232H136.02V98.6232H139.33V99.5232L134.96 99.4932Z"
				fill="#1D1D1B"
			/>
			<path
				d="M149.43 99.493L145.93 93.083V99.493H144.93V91.073H145.93L149.39 97.353V91.073H150.39V99.493H149.43ZM147.02 89.143C146.73 89.143 146.5 89.483 146.5 90.253H145.97C145.97 89.253 146.32 88.563 147.04 88.563C147.76 88.563 147.81 89.743 148.33 89.743C148.63 89.743 148.85 89.403 148.85 88.633H149.37C149.37 89.633 149.02 90.333 148.3 90.333C147.58 90.333 147.5 89.143 147.02 89.143Z"
				fill="#1D1D1B"
			/>
			<path
				d="M156.02 95.2831C156.02 92.8531 157.17 90.9331 159.21 90.9331C161.25 90.9331 162.41 92.8531 162.41 95.2831C162.41 97.7131 161.27 99.6431 159.21 99.6431C157.15 99.6431 156.02 97.7231 156.02 95.2831ZM161.38 95.2831C161.38 93.3431 160.61 91.8331 159.21 91.8331C157.81 91.8331 157.02 93.3431 157.02 95.2831C157.02 97.2231 157.78 98.7431 159.18 98.7431C160.58 98.7431 161.36 97.2031 161.36 95.2831H161.38Z"
				fill="#1D1D1B"
			/>
			<path
				d="M174.78 99.4932V91.0732H175.78V98.5932H178.83V99.4932H174.78Z"
				fill="#1D1D1B"
			/>
			<path
				d="M188.61 99.4932L188.02 97.5832H185.02L184.48 99.4932H183.4L185.93 91.0732H187.13L189.65 99.4932H188.61ZM186.61 92.1832L185.33 96.6832H187.9L186.61 92.1832Z"
				fill="#1D1D1B"
			/>
			<path
				d="M195.67 99.4932V91.9732H193.67V91.0732H198.67V91.9732H196.67V99.4932H195.67Z"
				fill="#1D1D1B"
			/>
			<path d="M204.02 99.4932V91.0732H205.02V99.4932H204.02Z" fill="#1D1D1B" />
			<path
				d="M215.42 99.4932L211.93 93.0832V99.4932H210.93V91.0732H211.93L215.39 97.3532V91.0732H216.39V99.4932H215.42Z"
				fill="#1D1D1B"
			/>
			<path
				d="M222.02 95.2831C222.02 92.8531 223.17 90.9331 225.21 90.9331C227.25 90.9331 228.41 92.8531 228.41 95.2831C228.41 97.7131 227.26 99.6431 225.21 99.6431C223.16 99.6431 222.02 97.7231 222.02 95.2831ZM227.38 95.2831C227.38 93.3431 226.61 91.8331 225.21 91.8331C223.81 91.8331 223.02 93.3431 223.02 95.2831C223.02 97.2231 223.78 98.7431 225.18 98.7431C226.58 98.7431 227.36 97.2031 227.36 95.2831H227.38Z"
				fill="#1D1D1B"
			/>
			<path
				d="M240.57 95.2831C240.57 92.7631 241.83 90.9331 243.84 90.9331C244.367 90.9376 244.883 91.0948 245.323 91.3859C245.763 91.677 246.109 92.0893 246.32 92.5731L245.48 92.9731C245.348 92.6432 245.123 92.3591 244.831 92.1564C244.54 91.9537 244.195 91.8413 243.84 91.8331C242.47 91.8331 241.6 93.2831 241.6 95.2831C241.6 97.2831 242.47 98.7431 243.84 98.7431C244.21 98.7236 244.565 98.5942 244.861 98.3716C245.156 98.1489 245.379 97.843 245.5 97.4931L246.33 97.8831C246.138 98.3917 245.798 98.8311 245.355 99.1448C244.911 99.4585 244.383 99.6321 243.84 99.6431C241.83 99.6431 240.57 97.8131 240.57 95.2831Z"
				fill="#1D1D1B"
			/>
			<path
				d="M251.44 95.2831C251.44 92.8531 252.59 90.9331 254.63 90.9331C256.67 90.9331 257.83 92.8531 257.83 95.2831C257.83 97.7131 256.69 99.6431 254.63 99.6431C252.57 99.6431 251.44 97.7231 251.44 95.2831ZM256.8 95.2831C256.8 93.3431 256.03 91.8331 254.63 91.8331C253.23 91.8331 252.47 93.3431 252.47 95.2831C252.47 97.2231 253.23 98.7431 254.63 98.7431C256.03 98.7431 256.8 97.2031 256.8 95.2831V95.2831Z"
				fill="#1D1D1B"
			/>
			<path
				d="M267.95 99.4932L264.46 93.0832V99.4932H263.46V91.0732H264.46L267.91 97.3532V91.0732H268.91V99.4932H267.95Z"
				fill="#1D1D1B"
			/>
			<path
				d="M276.25 99.4932V91.9732H274.25V91.0732H279.25V91.9732H277.25V99.4932H276.25Z"
				fill="#1D1D1B"
			/>
			<path
				d="M284.59 99.4932V91.0732H288.92V91.9732H285.6V94.7332H288.83V95.6232H285.6V98.6232H288.92V99.5232L284.59 99.4932Z"
				fill="#1D1D1B"
			/>
			<path
				d="M300.42 99.4932V92.6732L298.19 99.4932H297.8L295.57 92.6732V99.4932H294.57V91.0732H295.97L297.97 97.2732L299.97 91.0732H301.35V99.4932H300.42Z"
				fill="#1D1D1B"
			/>
			<path
				d="M307.32 99.4932V91.0732H309.88C310.476 91.1659 311.02 91.4688 311.413 91.9273C311.806 92.3858 312.021 92.9696 312.021 93.5732C312.021 94.1769 311.806 94.7607 311.413 95.2191C311.02 95.6776 310.476 95.9806 309.88 96.0732H308.33V99.4432L307.32 99.4932ZM311.18 93.5932C311.207 93.3926 311.191 93.1886 311.133 92.9947C311.075 92.8007 310.977 92.6212 310.844 92.4681C310.712 92.315 310.549 92.1917 310.365 92.1064C310.182 92.0211 309.982 91.9757 309.78 91.9732H308.33V95.2232H309.78C309.983 95.2194 310.182 95.1727 310.366 95.0863C310.549 94.9998 310.713 94.8756 310.845 94.7217C310.977 94.5678 311.075 94.3877 311.133 94.1933C311.191 93.9988 311.207 93.7943 311.18 93.5932V93.5932Z"
				fill="#1D1D1B"
			/>
			<path
				d="M317.33 95.2831C317.33 92.8531 318.47 90.9331 320.52 90.9331C322.57 90.9331 323.72 92.8531 323.72 95.2831C323.72 97.7131 322.57 99.6431 320.52 99.6431C318.47 99.6431 317.33 97.7231 317.33 95.2831ZM322.68 95.2831C322.68 93.3431 321.92 91.8331 320.52 91.8331C319.12 91.8331 318.36 93.3431 318.36 95.2831C318.36 97.2231 319.12 98.7431 320.52 98.7431C321.92 98.7431 322.68 97.2031 322.68 95.2831Z"
				fill="#1D1D1B"
			/>
			<path
				d="M333.18 99.4931L331.55 96.1231H330.34V99.4931H329.34V91.0731H331.92C332.243 91.0674 332.563 91.1299 332.86 91.2566C333.156 91.3834 333.423 91.5714 333.642 91.8084C333.861 92.0454 334.028 92.326 334.131 92.6319C334.234 92.9377 334.271 93.2619 334.24 93.5831C334.301 94.118 334.163 94.6568 333.854 95.0972C333.544 95.5377 333.084 95.8493 332.56 95.9731L334.33 99.4931H333.18ZM333.18 93.5931C333.207 93.3925 333.191 93.1885 333.133 92.9945C333.075 92.8006 332.977 92.6211 332.844 92.468C332.712 92.3149 332.549 92.1916 332.365 92.1063C332.182 92.0209 331.982 91.9756 331.78 91.9731H330.33V95.2831H331.78C332.66 95.2831 333.19 94.5531 333.19 93.5931H333.18Z"
				fill="#1D1D1B"
			/>
			<path
				d="M344.29 99.4934L343.75 97.5834H340.75L340.21 99.4934H339.12L341.66 91.0734H342.86L345.38 99.4934H344.29ZM342.29 92.1834L341 96.6834H343.58L342.29 92.1834ZM342.22 90.3034H341.57L343.02 88.4834H343.93L342.22 90.3034Z"
				fill="#1D1D1B"
			/>
			<path
				d="M355.02 99.4932L351.53 93.0832V99.4932H350.53V91.0732H351.53L354.99 97.3532V91.0732H355.99V99.4932H355.02Z"
				fill="#1D1D1B"
			/>
			<path
				d="M361.87 99.4932V91.0732H366.19V91.9732H362.88V94.7332H366.1V95.6232H362.88V98.6232H366.19V99.5232L361.87 99.4932Z"
				fill="#1D1D1B"
			/>
			<path
				d="M371.54 95.2831C371.54 92.8531 372.69 90.9331 374.73 90.9331C376.77 90.9331 377.94 92.8531 377.94 95.2831C377.94 97.7131 376.79 99.6431 374.73 99.6431C372.67 99.6431 371.54 97.7231 371.54 95.2831ZM376.9 95.2831C376.9 93.3431 376.13 91.8331 374.73 91.8331C373.33 91.8331 372.58 93.3431 372.58 95.2831C372.58 97.2231 373.33 98.7431 374.73 98.7431C376.13 98.7431 376.9 97.2031 376.9 95.2831Z"
				fill="#1D1D1B"
			/>
		</svg>
	)
}

export default LogoFull
