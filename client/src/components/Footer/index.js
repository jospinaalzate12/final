import { Stack } from "@mui/material"

export default function Footer(){
    return(
        <Stack spacing={2} direction="row" sx={{
            minHeight:'5vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            color:'white'

        }}>
            Hecho por Johnatan Alzate Ospina
        </Stack>
    )
}