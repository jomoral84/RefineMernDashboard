/* eslint-disable */

import React from "react";
import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useNavigate } from "react-router-dom";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigation = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
  } = useTable();

  const allProperties = data?.data ?? [];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#1114sd">
          Todas las propiedades
        </Typography>
        <CustomButton
          title="Añadir Propiedad"
          handleClick={() => navigation("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
            
          ></PropertyCard>
        ))}
      </Box>
    </Box>
  );
};

export default AllProperties;
