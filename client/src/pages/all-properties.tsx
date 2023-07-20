/* eslint-disable */

import React from 'react'
import { Add } from '@mui/icons-material'
import { useList } from "@pankod/refine-core"
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useNavigate } from "react-router-dom";

import { PropertyCard, CustomButton } from 'components';



const AllProperties = () => {

  const navigation = useNavigate();

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#1114sd">Todas las propiedades</Typography>
        <CustomButton title="Añadir Propiedad" handleClick={() => navigation("/properties/create")} backgroundColor="#475be8" color="#fcfcfc" icon={<Add />}/>
      </Stack>
    </Box>
  )
}

export default AllProperties