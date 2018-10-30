import React from 'react';
import Eimg1 from '../../assests/events/cam.jpg';
import Eimg2 from '../../assests/events/photography.jpg';
import Eimg3 from '../../assests/events/camera.jpg';
import Eimg4 from '../../assests/events/night.jpg';
import Mimg1 from '../../assests/events/Marriage/1.jpg';
import Mimg2 from '../../assests/events/Marriage/2.jpg';
import Mimg3 from '../../assests/events/Marriage/3.jpg';
import Mimg4 from '../../assests/events/Marriage/4.jpg';
import Bimg1 from '../../assests/events/Birthday/bithday.jpg';
import Bimg2 from '../../assests/events/Birthday/cake.jpg';
import Bimg3 from '../../assests/events/Birthday/children.jpg';
import Bimg4 from '../../assests/events/Birthday/family.jpg';
import Simg2 from '../../assests/images/hijab3064633.jpg';
import Quote from '../../assests/quote.png';

class Gallery extends React.Component{
    state = {
        scroll: false
    }
   
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }

      header = React.createRef();

      handleScroll = () => {
        if(window.scrollY > 145){
            this.setState({
                scroll: true
            });
        }else{
            this.setState({
                scroll: false
            });
        }
      }
    render() {
        return (
            <div>
                <div class="container">
                <div className="Gimg" style={{backgroundImage: `url(${Simg2})`,backgroundAttachment: 'fixed'}}></div>
                    <div class="text-block">
                        <div className="draw_line"></div>
                        <h4>Magzines</h4>
                        <img src={Quote} alt="" />
                        <p>In my humble opinion, having tons of products and furniture and magazines and clothes is not luxurious - living minimally is.</p>
                        <div class="Tri">
                          <div class="triangle-down"></div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <div className="Gimg" style={{backgroundImage: `url(${Eimg2})`,backgroundAttachment: 'fixed'}}></div>
                    <div class="text-block">
                        <div className="draw_line"></div>
                        <h4>Birthday</h4>
                        <img src={Quote} alt="" />
                        <p>When someone near and dear to your heart turns another year older, you’ll want to do everything you can to make their day extra memorable. Whether you’re throwing a birthday party, a cocktail party or planning a dinner at the honoree’s favorite restaurant, it’s tradition to give the guest of honor a Happy Birthday card. As if picking out a card wasn’t tough enough, on top of that you’ll need to craft a happy birthday message too.</p>
                    </div>
                </div>
                <div class="container">
                <div className="Gimg" style={{backgroundImage: `url(${Mimg3})`,backgroundAttachment: 'fixed'}}></div>
                    <div class="text-block">
                        <div className="draw_line"></div>
                        <h4>Marriage</h4>
                        <img src={Quote} alt="" />
                        <p>I have a best friend as a husband, and he is my number one supporter. He's a family man, and he's always giving back to God. That is what makes him a beautiful man. We're not perfect by any means, but that makes us beautiful as well. We're not afraid to say we're not perfect.</p>
                    </div>
                </div>
                <div class="container">
                <div className="Gimg" style={{backgroundImage: `url(${Bimg3})`}}></div>
                    <div class="text-block">
                        <div className="draw_line"></div>
                        <h4>Photoshoot</h4>
                        <img src={Quote} alt="" />
                        <p>It’s the first time in the history of the world that creatives are also distributors. And that’s very profound if you think that up until the recent history, permission was required for us to be able to share work at any sort of scale.</p>
                    </div>
                </div>

                
                <div className="moving_position">
                  <h1 className="fact">Our Facts</h1>
                    <div className="box_left">
                      <img src={Simg2} alt="" />
                      <img src={Eimg2} alt="" />
                    </div>
                    <div className="beside_leftbox">
                      <img src={Mimg3} alt="" />
                    </div>
                    <div className="beside_leftD">
                      <img src={Eimg2} alt="" />
                    </div>
                    <div className="middle_img">
                       <img src={Simg2} alt="" />
                    </div>
                    <div className="right_boxs">
                       <img src={Mimg1} alt="" />
                       <img src={Mimg2} alt="" />
                       <img src={Mimg3} alt="" />
                       <img src={Mimg4} alt="" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Gallery;