//Configs will be replaced by Admin (Backend Data)

const ContactConfig = {
  email: "max.neo.dev@gmail.com",
  phone: 9876543210,
  address: "CBE"
}
const MembershipPlans = [
  {
    pid: 1,
    planname: 'Free',
    price: 0,
    days: 30
  },
  {
    pid: 2,
    planname: '6 Months',
    price: 600,
    days: 180
  },
  {
    pid: 3,
    planname: 'Annual',
    price: 1000,
    days: 360
  },
]
const questions = [
  {
    qid: 1,
    title: 'question',
    option1: 'option a',
    option2: 'option b',
    option3: 'option c',
    correctoption: 'option1'
  },
  {
    qid: 2,
    title: 'question2',
    option1: 'option m',
    option2: 'option n',
    option3: 'option o',
    correctoption: 'option2'
  },
  {
    qid: 3,
    title: 'question3',
    option1: 'option x',
    option2: 'option y',
    option3: 'option z',
    correctoption: 'option3'
  }
];

const razorpayconfig = {
  key: 'rzp_test_3T6byTDHuVQpX5',
  key_secret: 'aQsOHNPDTZRxvAnruOCVupUp',
  currency: "INR",
  name: 'iamneo',
}

const testuserconfig = {
  name: 'max',
  email: 'max.neo.dev@gmail.com',
  contact: 9876543210
}

// {
//   "siteEmail": "max.neo.dev@gmail.com",
//   "siteContact": "9789681510",
//   "siteAddress": "1205/A, 3rd Floor,
// SPA SRR Towers, Avinashi Rd,
// Pappanaickenpalayam,
// Tamil Nadu 641037",
//   "siteX": "https://twitter.com/iamneo_ai",
//   "siteYoutube": "https://www.youtube.com/@iamneo_ai3526/",
//   "siteFacebook": "https://www.facebook.com/iamneoai",
//   "siteMaintenanceMode": false
// }


export { ContactConfig, MembershipPlans, questions, razorpayconfig, testuserconfig }