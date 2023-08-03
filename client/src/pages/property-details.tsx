/* eslint-disable  */

import React from "react";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChatBubble,
  Delete,
  Edit,
  Phone,
  Place,
  Star,
} from "@mui/icons-material";

import { CustomButton } from "components";

const propertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Detalles
      </Typography>
      <Box
        mt="20px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Box flex={1} maxWidth={764}>
          <img
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            height={546}
            style={{ objectFit: "cover", borderRadius: "10px" }}
            className="property_details-img"
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default propertyDetails;
