import {Button, ButtonGroup, Image} from "react-bootstrap";
import facebook_logo from '../res/facebook_logo.png'
import twitter_logo from '../res/twitter_logo.png'
import instagram_logo from '../res/instagram_logo.png'

const clickLink = (link) => {
    window.open(link, '_blank');
}

function SocialMediaButtons() {
    return(<ButtonGroup className="border-0 d-flex w-75">
            <Button variant={"outline-primary"} className="border-0 sm-icon-size clear-button">
                <Image
                    src={facebook_logo}
                    className="sm-icon-size img-fluid"
                    onClick={()=> clickLink("https://www.facebook.com/Pacto.Direito.de.Migrar")}/>
            </Button>
            <Button variant={"outline-primary"} className="border-0 sm-icon-size clear-button">
                <Image
                    src={instagram_logo}
                    className="sm-icon-size img-fluid"
                    onClick={()=> clickLink("https://www.instagram.com/africadocoracaobr/")}/>
            </Button>
            <Button variant={"outline-primary"} className="border-0 sm-icon-size clear-button">
                <Image
                    src={twitter_logo}
                    className="sm-icon-size img-fluid"
                    onClick={()=> clickLink("https://www.twitter.com/")}/>
            </Button>
        </ButtonGroup>
    );
}

export default SocialMediaButtons;
