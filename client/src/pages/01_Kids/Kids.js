import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Wrapper from "../../components/Wrapper";
import QuickLinks from "../../components/Quick_Links";
import Footer from "../../components/Footer";
import heroImages from "../../HeroImages.json";


class Kids extends Component { 
   
  render() {
    return(
    <div>
      <Header />
      <Nav />
      <Hero 
      id  = {heroImages[1].id}
      src  = {heroImages[1].image}
      alt = {heroImages[1].name}
      />
      <Wrapper>
      <div className="pageTitle">
          <h1>FOR THE KIDS</h1>  
      </div>
      <div className="pageContent media">
        <div className="media-body">
          <p>On average, families have less than three minutes from the time the first smoke alarm sounds to escape a fire. The sooner you hear an alarm, the more time you will have to get out.
</p>
          <h4>10 THINGS TO KEEP YOURSELF SAFE</h4>
          <ul className="mb-3">
            <li>Call 9-1-1: If there is an emergency, don’t wait call 9-1-1 right away. Also know a number of a friend or family member who can help in an emergency.
</li>
            <li>Smoke Detectors: Install smoke alarms on every floor of your home, in hallways, inside bedrooms and outside of sleeping areas.  Change your batteries twice a year. An easy way to remember is by changing in the fall when you set your clocks back and in the spring when you set them forward.
</li>
            <li>Make a Plan: Talk to your family about what to do in the event of a fire. Make sure everyone knows what to do and where to go. Check that every room has two exits. Designate an outside meeting place and practice meeting there.</li>
            <li>Practice: Run through your plan, so everyone knows what to do. If one of your exits is a window, make sure it will open. Practice meeting at your designated location.</li>
            <li>Get Out: If there is a fire, get outside. Do not hide.</li>
            <li>Get Low: In an event of a fire, get as low as possible since there is less smoke. Crawl  yourself to safety.</li>
            <li>Stop, Drop and Roll: In a fire if your clothes start on fire, don’t panic. Stop, drop and roll. Continue to roll until the fire is out.</li>
            <li>Stay outside: Never go back inside a burning building. Go to your designated meeting spot and stay there until help arrives.</li>
            <li>Matches aren’t toys: Don’t play with matches. If you find matches or a lighter, let an adult know. </li>
            <li>Look for fire hazards: Check your fireplaces and electrical cords to make sure they are in good working order.</li>
          </ul> 
        </div>
        <span className="media-right pl-5">
            <img src="../../../assets/images/01_Kids.jpg" alt="Classroom Visit" height="300"/>
        </span>
      </div>
      <div className="mb-5">
        <ul class="list-group">
          <li class="list-group-item">
            <a href='http://www.sparky.org'>Learn about fire safety from Sparky</a>
          </li>
          <li class="list-group-item">
            <a href='http://kidshealth.org/en/kids/fire-safety.html#cat122'>What to Do In a Fire</a>
          </li>
          <li class="list-group-item">
            <a href='https://smokeybear.com/en/smokey-for-kids'>Smokey The Bear</a>
          </li>
          <li class="list-group-item">
            <a href='http://www.firesafetyrocks.com'>Fire Safety Rocks</a>
          </li>
          <li class="list-group-item">
            <a href='http://www.muskegon-mi.gov/public-safety/muskegon-fire/fire-safety-presentation-modules/'>Firefighters Are My Friends and Other Presentations</a>
          </li>
          <li class="list-group-item">
            <a href='https://www.ready.gov/kids'>FEMA for Kids</a>
          </li>
          <li class="list-group-item">
            <a href='http://www.firesafekid.org'>FireSafeKid</a>
          </li>
          <li class="list-group-item">
            <a href='http://playsafebesafe.com'>Play Safe! Be Safe</a>
          </li>
          <li class="list-group-item">
            <a href='http://kidshealth.org/en/kids/fire-safety.html#cat122'>What to Do In a Fire</a>
          </li>
          <li class="list-group-item">
            <a href='http://www.sparklesthefiresafetydog.com'>Sparkles, the Fire Safety Dog</a>
          </li>
        </ul>
      </div>
      </Wrapper>
      <QuickLinks />
      <Footer />
    </div>
    )
  }
  
}

export default Kids;
