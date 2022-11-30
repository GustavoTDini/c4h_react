import {Accordion, Button, Container, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import AddSocialMedia from "./AddSocialMedia";
import SocialMediaCard from "./SocialMediaCard";
import {useNavigate} from "react-router";
import {resetToken, tokenKey} from "../../utilities/apiHelpers";
import {_getSocialMediaByUserId} from "../../api/socialMedia";

function ShowSocialMedia({userId}) {
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    const handleCloseSocialMedia = () => setShowSocialMedia(false);
    const handleShowSocialMedia = () => setShowSocialMedia(true);

    const navigate = useNavigate()
    const [medias, setMedias] = useState({list: [], isFetching: false, fetched: false});

    useEffect(() => {
        setMediasList(fetchMedias)
    }, [userId]);


    const fetchMedias = async () => {
        try {
            setMedias(medias => ({list: medias.list, isFetching: true, fetched: false}));
            const response = await _getSocialMediaByUserId(localStorage.getItem(tokenKey), userId)
            console.log(response.message)
            if (response.message === "Unauthenticated."){
                resetToken(navigate)
            }
            return response.message
        } catch (e) {
            console.log(e);
            return false
        }
    };

    function setMediasList(fetchMedias){
        fetchMedias().then(res =>{
            console.log(res)
            if (res === false){
                setMedias((medias) => ({list: medias.list, isFetching: false, fetched: false}));
            } else{
                setMedias({list: [...res], isFetching: true, fetched: true});
            }
        })
    }

    return(
        <Container className="p-0">
            <Accordion defaultActiveKey="1" className="justify-content-start">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h2 className="blue-text h4">Mídias Sociais:</h2>
                    </Accordion.Header>
                    <Accordion.Body className="mt-2 justify-content-start card-scroll" style={{height: "280px"}}>
                        <Stack direction="horizontal">
                            <Button className="w-50" onClick={()=> handleShowSocialMedia()}>Adicionar Mídia</Button>
                            {medias.fetched && medias.list.map((media)=>(
                                <SocialMediaCard key={media.id} socialMedia={media}/>
                            ))}
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <AddSocialMedia show={showSocialMedia} handleClose={handleCloseSocialMedia}/>
        </Container>
    );
}

export default ShowSocialMedia;
