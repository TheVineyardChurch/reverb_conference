import React from "react"

import "../components/uikit.min.css"
import "../components/layout.css"
import Speaker from "../components/speaker"

const Putty = {
  name: "Putty Putman",
  bio: `Putty started the School of Kingdom Ministry, and oversees
  the healing, prophetic, deliverance, and evangelism ministries at The
  Vineyard Church of Central Illinois. Putty was pursuing a doctoral
  degree in theoretical physics at the University of Illinois when God
  thrust him headfirst into the supernatural. After a dramatic supernatural
  encounter in China, Putty began to gather and train people in power ministry
  and pursuing an intimate relationship with God. What began with four people
  as a small group grew to multiple groups, then the first campus of the School
  of Kingdom Ministry, and now multiple locations around the world. He is a
  gifted communicator with a powerful message of identity.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/PuttyPutman.jpg"
}

const Kyle = {
  name: "Kyle Howard",
  bio: `Kyle’s deepest passions are to see people encounter the
  loving presence of the Father and for people to walk in the fullness of who
  they were made to be as sons and daughters of the living God. Kyle began
  leading worship over 10 years ago in his youth ministry at the age of 14.
  He is featured on worship albums for the National Vineyard and VWorship.
  Kyle now serves on staff at The Vineyard Church of Central Illinois as
  Worship Pastor. When he isn’t leading worship, Kyle loves to play
  basketball, golf, and hang out with friends.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/KyleHoward.jpeg"
}

const Leah = {
  name: "Leah Wenger",
  bio: `Leah is a born and raised Vineyard kid and has served as a pastor for
  the last 11 years at The Vineyard Church of Central IL. From youth ministry
  to planting a multi-site church- she's experienced it all. Leah is a graduate
  of the University of Illinois, Vineyard Leadership Institute and The School of
  Kingdom Ministry and is most passionate about creating a healthy stewardship
  culture and raising up leaders of leaders.  She has been married to her husband
  Ben for 13 years and has three awesome (exhausting) kids; Cohen (8), Claire (6)
  and Gia (4).  In her spare time, she loves to preach, play the guitar, travel
  and drink all.the.coffee.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/LeahWenger.jpeg"
}

const Carolyn = {
  name: "Carolyn Yoder",
  bio: `Three words that best describe Carolyn Yoder as a communicator and
  worship leader is passionate, authentic, and powerful! Raised in a
  full-time prison ministry led by her evangelistic parents, Carolyn was
  instilled with a deep desire to see men’s and women’s lives transformed
  by the “good news” of the gospel.
  Carolyn and her husband Chad live in Central IL and have three
  children: Blake (17), Ava (14) and Grey (11). For the past 19 years, they
  have been an intricate part of The Vineyard Church of Central IL where
  Chad and Carolyn currently serve as Assistant Pastors of their Sullivan Campus.
  When she isn’t busy with the day-to-day details of life, Carolyn loves to
  throw a good party, dabble in interior design and fashion consulting, or
  plan her next family getaway! Above all else, Carolyn will quickly tell you that
  her greatest passion in life is to raise up a generation of men and women who understand
  their identity in Jesus and walk boldly in their calling. This has inspired
  a current vision to pursue creating book/video studies for women on
  image and identity. Her pioneering spirit keeps all who live life with
  her on the edge of their seat, wondering which mountain she will climb
  next, what adventure they will take with her.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/CarolynYoder.jpeg"
}

const Dan = {
  name: "Dan Putman",
  bio: `Daniel Putman has a Bachelor's in philosophy from Bethel University in Minnesota.
  While trying to figure out what to do with his life, he met the Holy Spirit at a
  poolside and it flipped his life upside down. Since then he has committed his
  life to pursue God and the Kingdom which has taken him all over the world.
  Daniel Putman is on Staff as the Healing Pastor at the Vineyard Church of
  Central Illinois. He also serves on staff as the content developer at the
  School of Kingdom Ministry and is the Urbana School of Kingdom Ministry
  Leader. He has a passion for teaching others about healing, deliverance,
  prophesy and to live in partnership with the Holy Spirit. Through his work at
  the local church and at the School of Kingdom Ministry he has trained hundreds
  of people in healing, giving prophetic words, and how to work with the Holy Spirit.
  His dream is to make a partnership with the Holy Spirit a regular part of every
  Christian's experience.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/DanielPutman.jpeg"
}

const Clay = {
  name: "Clay Harrington",
  bio: `At an early age, Clay was immersed in timeless teachings about God
  through his mother – a powerful woman of God. However, as a teenager, he
  turned to a life of sin. It wasn’t until the age of 30 that Clay would go
  all-in for God. Since his re-birth as a son of God, Clay experienced many
  radical encounters with the Heavenly Father which led to him to make it his
  life’s mission to help others live victorious over sin. Today, Clay is
  traveling as an itinerant evangelist who inspires others to press into a r
  ich relationship with the Father, equips the saints to live naturally
  supernatural lifestyles, and provokes the church to live radically for
  Jesus. Clay is married to his wife, Regina, and has two sets of boy-girl
  twins. He currently works as the Evangelism Pastor at the Vineyard Church
  in Urbana, IL.`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/ClayHarrington.JPG"
}

const Jo = {
  name: "Joanna Machen",
  bio: `Bio coming soon`,
  img: "https://s3.us-east-2.amazonaws.com/assets-reverb.us/guests/JoannaMachen.jpeg"
}



const outlineTitle = {
  color: '#f2f4f4',
  textShadow:`
      3px 3px 0 #222222,
      -3px 3px 0 #222222,
      -3px -3px 0 #222222,
      3px -3px 0 #222222
  `,
  textTransform: 'uppercase',
  fontWeight: '800'
}

/* exported for about page */
const Guests = () => (
  <div>
    <h1 className="uk-heading-hero" style={outlineTitle}>Speakers</h1>
    <Speaker
      speakerName={Putty.name}
      speakerBio={Putty.bio}
      speakerImg={Putty.img}
    />
    <Speaker
      speakerName={Carolyn.name}
      speakerBio={Carolyn.bio}
      speakerImg={Carolyn.img}
    />
    <Speaker
      speakerName={Kyle.name}
      speakerBio={Kyle.bio}
      speakerImg={Kyle.img}
    />
    <Speaker
      speakerName={Leah.name}
      speakerBio={Leah.bio}
      speakerImg={Leah.img}
    />

    <h1 className="uk-heading-hero" style={outlineTitle}>Workshops</h1>
    <Speaker
      speakerName={Dan.name}
      speakerBio={Dan.bio}
      speakerImg={Dan.img}
    />
    <Speaker
      speakerName={Clay.name}
      speakerBio={Clay.bio}
      speakerImg={Clay.img}
    />
    <Speaker
      speakerName={Jo.name}
      speakerBio={Jo.bio}
      speakerImg={Jo.img}
    />
  </div>
)

export default Guests
