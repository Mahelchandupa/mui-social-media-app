import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Add as AddIcons, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import React, { useState } from 'react'
import styled from '@emotion/styled'

const StyledModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box) (({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
 }))


const Add = () => {

    const [open, setOpen] = useState(false)
    

    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label='add'>
                    <AddIcons />
                </Fab>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} sx={{marginLeft: {xs: 2 }, marginRight: {xs: 2}}} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <UserBox onClick={(e) => setOpen(true)}>
                        <Avatar sx={{ width: 30, height: 30 }} src='https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww' />
                        <Typography variant='span'>Mahel</Typography>
                    </UserBox>
                    <TextField 
                      sx={{width: "100%"}}
                      id='standard-multiline-static'
                      multiline
                      rows={3}
                      placeholder="What's on your mind?"
                      variant='standard'
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary'/>
                        <Image color="secondary"/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='error'/>
                    </Stack>
                    <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
                        <Button>Post</Button>
                        <Button  sx={{width: "100px"}}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModel>
        </>
    )
}

export default Add