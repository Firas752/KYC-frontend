"use client";
import SimpleLayout from "@/layouts/user/simpleLayout";
import React, { useCallback, useState } from "react";
import { Box, Text, Center } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MobileButton } from "@/components/atom/button";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { FcPackage } from "react-icons/fc";

const checkedIcon = (
	<Box cursor={"pointer"}>
		<BsCheckCircleFill size="1.5em" color="#00A980" />
	</Box>
);

const deleteIcon = (
	<Box
		bg="#D3D3D3"
		w="24px"
		h="24px"
		borderRadius={"50px"}
		display={"flex"}
		alignItems={"center"}
		justifyContent={"center"}
		cursor={"pointer"}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625"
				stroke="#404040"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</Box>
);

const fileUploadSection = (
	<Box
		my="2em"
		border="1px solid var(--primary-gray)"
		p="1.5em"
		bg="#ffffff0d"
		borderRadius={"md"}
		textAlign="center"
		cursor={"pointer"}
	>
		<Box my="1em">
			<center>
				<svg
					width="21"
					height="20"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="upload-cloud-02">
						<path
							id="Icon"
							d="M7.16663 13.3333L10.5 10M10.5 10L13.8333 13.3333M10.5 10V17.5M17.1666 13.9524C18.1845 13.1117 18.8333 11.8399 18.8333 10.4167C18.8333 7.88536 16.7813 5.83333 14.25 5.83333C14.0679 5.83333 13.8975 5.73833 13.8051 5.58145C12.7183 3.73736 10.712 2.5 8.41663 2.5C4.96485 2.5 2.16663 5.29822 2.16663 8.75C2.16663 10.4718 2.86283 12.0309 3.98908 13.1613"
							stroke="#475467"
							stroke-width="1.66667"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
				</svg>
			</center>
		</Box>

		<Text color="#484848">
			<span
				style={{
					color: "#727272",
				}}
			>
				Click to upload or{" "}
			</span>
			drag and drop
		</Text>
		<Text>SVG, PNG, JPG or GIF (max. 800x400px)</Text>
	</Box>
);

const Page = () => {
	const [isDisabled, setDisabled] = useState<boolean>(true);
	const [filename, setFileName] = useState<string>("");

	//handle dropzone upload
	const onDrop = useCallback((acceptedFiles: any) => {
		const files = acceptedFiles;
		setFileName(files[0].name);
		setDisabled(false);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<SimpleLayout heading={"Upload Your Bank Statment"} profile={true}>
			{[1, 1, 1].map((_, key) => {
				return (
					<Flex
						alignItems={"center"}
						justifyContent={"space-between"}
						borderBottom={"1px solid var(--primary-gray)"}
						py="1.5em"
						key={key}
					>
						<Box display={"flex"} gap="1em">
							<Box>
								<Image
									src={"/images/pdf.svg"}
									width={50}
									height={50}
									alt="Pdf icon"
								/>
							</Box>

							<Box>
								<Text
									fontWeight={"700"}
									fontSize={"16px"}
									color={"brand.dark_text"}
								>
									Bank Statment (July){" "}
								</Text>
								<Text color="#4F4D4D">Upload complete</Text>
							</Box>
						</Box>

						<Box display={"flex"} gap="1em">
							{deleteIcon} {checkedIcon}
						</Box>
					</Flex>
				);
			})}

			<form action=""></form>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				{!isDragActive ? (
					<>
						{fileUploadSection}
						{filename && (
							<Box
								bg="#64e4641c"
								borderRadius={".5em"}
								h="80px"
								px="1em"
								py={"1em"}
								display={"flex"}
								alignItems={"center"}
								gap="1em"
							>
								<FcPackage size="1.5em" /> <Text color="green">{filename}</Text>
							</Box>
						)}
					</>
				) : (
					<>{fileUploadSection}</>
				)}
			</div>
			<Box mt="1.5em">
				<Center>
					<MobileButton w="100%" isDisabled={isDisabled}>
						Next
					</MobileButton>
				</Center>
			</Box>
		</SimpleLayout>
	);
};

export default Page;
