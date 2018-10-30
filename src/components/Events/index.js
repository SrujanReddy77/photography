import React from 'react';
import Simg1 from '../../assests/images/children817365.jpg';
import Simg2 from '../../assests/images/hijab3064633.jpg';
import Simg3 from '../../assests/images/legs434918.jpg';
import Simg4 from '../../assests/images/people2565128.jpg';

let interval;
class Events extends React.Component{
  state={
    images: [Simg1,Simg2,Simg3,Simg4],
    index: 0
  }

  componentDidMount(){
    interval = setInterval(this.timer,7000);
  }

  componentWillUnmount(){
    clearInterval(interval);
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

  render() {
    const titles = ["Magzines","Birthday","Marraige","Photoshoot"];
    const info = ["All one needs to do is read - books, magazines, research the Internet - and pay attention to the influencers in their lives to discover the myriad people of strong moral character who have and still are making positive, meaningful contributions and differences in our world.","When someone near and dear to your heart turns another year older, you’ll want to do everything you can to make their day extra memorable. Whether you’re throwing a birthday party, a cocktail party or planning a dinner at the honoree’s favorite restaurant, it’s tradition to give the guest of honor a Happy Birthday card. As if picking out a card wasn’t tough enough, on top of that you’ll need to craft a happy birthday message too.","I have a best friend as a husband, and he is my number one supporter. He's a family man, and he's always giving back to God. That is what makes him a beautiful man. We're not perfect by any means, but that makes us beautiful as well. We're not afraid to say we're not perfect. We have our disagreements, but that comes along with marriage.","It’s the first time in the history of the world that creatives are also distributors. And that’s very profound if you think that up until the recent history, permission was required for us to be able to share work at any sort of scale. We had to get permission from galleries, from ad agencies or photo editors to be able to have our work out there. And now anybody with access to a computer can show their work in 200 countries around the world"];
    return (
      <div>
         <div className="main_events">
           <img src={this.state.images[this.state.index]} alt="" />
         </div>
         <div class="text1">
              <div className="eline"></div>
              <h1>{titles[this.state.index]}</h1>
              <p>{info[this.state.index]}</p>
         </div>
      </div>
    )
  }
} 

export default Events;