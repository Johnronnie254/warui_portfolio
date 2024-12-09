import React from "react";
import "./Work.css";


const Work = () => {
  // Full card data array
  const cardData = [
    {
      title: "Jiji Showmax",
      video: "VIDEO",
      description:
        "Had the incredible opportunity to work as the cinematographer and editor for this trailer. It’s been an amazing journey bringing this story to life alongside the incredibly talented directors @enosolik , @edwinkamau1 , @michael_m_jones , @njuekevin and @isayaevans Starring the amazing @nungarikiore as Achie, @fridah_mumbe as Julz, @aicystevens as Mwede, @sybilcolette as Vee, and @keithchuaga as Makali, this series is a must-watch!",
    },
    {
      title: "Pepeta Showmax",
      video: "VIDEO",
      description:
        "S1E8, the last of #pepetashowmax, aired last week and I couldn't be more thrilled by the outcome of what was on screen. After months of shooting, it was all worth it. I'm beyond honored to have been part of the camera team behind this show, led by the amazing DOP Dru Mugai, @msheo_, and the best ACs @_.nashreen and @_q.u.a.s.i.",
    },
    {
      title: "Netflixsa",
      video: "VIDEO",
      description:
        "Proud to be part of this @netflixsa promo. Kenyan team: @mammitoeunice. Production House: @igabantustudios. Lead: @giftmirie @igabantu. Producer: @wanzakaluva. Director/DP: @enosolik. Assistant Director: @edwinkamau1. Cinematography: @warui_fred. Camera assistant: @sindednis. MUA: @mis.wairimu. Gaffer: @paulo_ngugi. Location: @location101africa. Sound: @onyangogrishon. BTS: @mario_shots.",
    },
    {
      title: "Real Estate",
      video: "VIDEO",
      description:
        "Here are key tips from @goshenacquisitionsltd. Thrilled to showcase one of my cinematography projects I did for them. Special thanks to @abelmutua for the incredible collaboration.",
    },
    {
      title: "Shell Kenya",
      video: "VIDEO",
      description:
        "Happy to have lensed a project with @mojoproductionskenya and DOP @mohdzain52 for @shell. A rewarding experience working with such an amazing production team.",
    },
    {
      title: "Uradi Netflix",
      video: "VIDEO",
      description:
        "A Kenyan Netflix movie I had the privilege of editing. 'Uradi' stands as a milestone in Kenyan film production, and I’m honored to have contributed to its storytelling.",
    },
  ];

  return (
    <div className="work-container">
    
      <h2 className="work-title">Projects</h2>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="work-card">
            {/* Content to display on hover */}
            <div className="card-hover-content">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-video">{card.video}</div>
              <p className="card-description">{card.description}</p>
            </div>
            {/* Default view with title */}
            <div className="card-default">
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
