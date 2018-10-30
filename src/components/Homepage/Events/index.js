import React from 'react';
import Eimg1 from '../../../assests/events/cam.jpg';
import Eimg2 from '../../../assests/events/photography.jpg';
import Eimg3 from '../../../assests/events/camera.jpg';
import Eimg4 from '../../../assests/events/night.jpg';
import Mimg1 from '../../../assests/events/Marriage/1.jpg';
import Mimg2 from '../../../assests/events/Marriage/2.jpg';
import Mimg3 from '../../../assests/events/Marriage/3.jpg';
import Mimg4 from '../../../assests/events/Marriage/4.jpg';
import Bimg1 from '../../../assests/events/Birthday/bithday.jpg';
import Bimg2 from '../../../assests/events/Birthday/cake.jpg';
import Bimg3 from '../../../assests/events/Birthday/children.jpg';
import Bimg4 from '../../../assests/events/Birthday/family.jpg';
import Pimg1 from '../../../assests/events/photoshoot/1.png';
import Pimg2 from '../../../assests/events/photoshoot/2.JPG';
import Pimg3 from '../../../assests/events/photoshoot/3.JPG';
import Pimg4 from '../../../assests/events/photoshoot/4.png';

let interval;
class Events extends React.Component{
  state = {
    event1: [Eimg1,Eimg2,Eimg3,Eimg4],
    event2: [Mimg1,Mimg2,Mimg3,Mimg4],
    event3: [Bimg1,Bimg2,Bimg3,Bimg4],
    event4: [Pimg1,Pimg2,Pimg3,Pimg4],
    index: 0
  }

  componentDidMount(){
     interval = setInterval(this.timer, 6000);
  }

  timer = () => {
    if(this.state.index < 3){
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }else{
      this.setState({
        index: 0
      });
    }
  }

  render(){
    const arr = [1,2,1,2];
    const events = [this.state.event1,this.state.event2,this.state.event3,this.state.event4];
    const titles = ["Magzines","Marriage","Birthday","Photoshoot"];
    const paras = ["All one needs to do is read - books, magazines, research the Internet - and pay attention to the influencers in their lives to discover the myriad people of strong moral character who have and still are making positive, meaningful contributions and differences in our world.","When someone near and dear to your heart turns another year older, you’ll want to do everything you can to make their day extra memorable. Whether you’re throwing a birthday party, a cocktail party or planning a dinner at the honoree’s favorite restaurant, it’s tradition to give the guest of honor a Happy Birthday card. As if picking out a card wasn’t tough enough, on top of that you’ll need to craft a happy birthday message too.","I have a best friend as a husband, and he is my number one supporter. He's a family man, and he's always giving back to God. That is what makes him a beautiful man. We have our disagreements, but that comes along with marriage.","It’s the first time in the history of the world that creatives are also distributors. And that’s very profound if you think that up until the recent history, permission was required for us to be able to share work at any sort of scale. We had to get permission from galleries, from ad agencies or photo editors to be able to have our work out there. And now anybody with access to a computer can show their work in 200 countries around the world"];
    return (
      <div>
        {
          arr.map((ele,index) => (
               <div key={index}>
                <div className={(index === 2) ? `event${ele} emar` : `event${ele}`}>
                  <div className="clipBook" style={{backgroundImage: `url(${events[index][this.state.index]})`}}></div>
                  <div className="title"><h2>{`${titles[index]}`}</h2></div>
                  <div className="dline"></div>
                  <h4 className="para">{`${paras[index]}`}</h4>
                  <div className="deco"></div>
                    { events[index].map((ele2,index1) => (
                        <img src={ele2} key={index1} alt="" />
                      ))
                    }
                  <div className="deco2"></div>
                </div>
                <div className="break"></div>
              </div>   
          ))
        }
      </div> 
    ); 
  }
}

export default Events;