//@ts-nocheck
"use client";
import SimpleLayout from "@/layouts/user/simpleLayout";
import {
	Box,
	InputGroup,
	Input,
	Text,
	InputRightElement,
	Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MobileButton } from "@/components/atom/button";
import { useRouter } from "next/navigation";
import { applicationData, currentCountry } from "@/data/application_data";
import { BsCheck } from "react-icons/bs";
import { useStore } from "@/zustand/store";



const searchIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
	>
		<path
			d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
			stroke="#4B4A54"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

const NationlityPage = () => {
	const router = useRouter();
	const goToNext = () => {
		if (selectedState === "Indonesia") {
		  router.push("/signature"); // replace "/indonesia-route" with the actual route for Indonesia
		} else {
		  router.push("/personal-info");
		}
	  };
	const [isFiltered, setFilteredData] = useState(currentCountry);
	const [isDisabled, setDisabled] = useState<boolean>(true);
	const [selectedState, setSelectedState] = useState<string>("");
	const { updateKycData } = useStore();
	//handle search
	const handleSearch = (event: any) => {
		const value = event.target.value.toLowerCase();
		const filteredData = currentCountry.filter(
			(data) => data?.nation.toLocaleLowerCase().includes(value),
		);

		// /@ts-ignore
		setFilteredData(filteredData);
	};
	
	return (
		<SimpleLayout heading="Select your nationality">
			{/* HIDE SEARCH BAR FOR NOW 
			SINCE WE ARE ONLY USING 2 COUNTRIES */}
			{/* <Box>
				<InputGroup>
					<InputRightElement>{searchIcon}</InputRightElement>
					<Input
						type="search"
						placeholder="Search for country"
						size="lg"
						onChange={handleSearch}
					/>
				</InputGroup>
			</Box> */}

			<Box my="1em" display={"flex"} gap="1em" flexDir={"column"}>
				{isFiltered.length === 0 ? (
					<h1>No Country Found</h1>
				) : (
					<>
						{isFiltered?.map((_, key) => {
							return (
								<Box
									key={key}
									border={"1px solid var(--primary-gray)"}
									w="100%"
									height={"53px"}
									borderRadius={"md"}
									display={"flex"}
									alignItems={"center"}
									px="1em"
									color={"#635D9E"}
									cursor={"pointer"}
									_hover={{
										background: "#8080800d",
									}}
									onClick={() => {
										setDisabled(false);
										setSelectedState(_.nation);
										const nationality = {
											nationality: _.nation,
										};

										updateKycData(nationality);
									}}
									justifyContent={"space-between"}
								>
									<Flex alignItems={"center"}>
										<Box
											w="50px"
											h="25px"
											backgroundImage={_.countryFlag}
											borderRadius={"30px"}
											backgroundRepeat={"no-repeat"}
											backgroundSize={"contain"}
											backgroundPosition={"center"}
										></Box>
										<Text fontWeight={500} letterSpacing={"-0.28px"}>
											{_?.nation}
										</Text>
									</Flex>

									{_?.nation === selectedState && (
										<BsCheck size="1.5em" color={"brand.primary"} />
									)}
								</Box>
							);
						})}
					</>
				)}
			</Box>

			<Flex w="100%" gap="1em">
				<MobileButton
					w="100%"
					bg="none"
					color="black"
					onClick={() => router.back()}
				>
					Cancel
				</MobileButton>

				<MobileButton w="100%" onClick={goToNext} isDisabled={isDisabled}>
					Next
				</MobileButton>
			</Flex>
		</SimpleLayout>
	);
};

export default NationlityPage;
