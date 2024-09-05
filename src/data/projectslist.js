import eezy from '../assets/eezy.png'
import hci from '../assets/hci.png'
import payoffPal from '../assets/payoffPal.png'
const ProjectsList = [
	{
		title: 'PayoffPal (September 2024 - present)',
		description: 'Developing PayoffPal, a comprehensive personal finance app that helps users manage debt repayment strategies, track budgets, and monitor financial progress. The app provides tools for calculating optimal payoff plans, creating custom budgets, and offering financial tips for better money management.',
		link: 'https://github.com/ramanbhandari/payoffpal-ui',
		techs: 'Ruby on Rails, PostgreSQL, Expo, React Native, Axios',
		projImage: payoffPal,
	},
	{
		title: 'Eezy: Personal Manager',
        description: 'Developed a personal organizer app group project featuring a calendar, checklist, events, and password manager using Android Studio and Java. Utilized HyperSQL for secure data storage and efficient management.',
        link: 'https://github.com/ramanbhandari/Eezy-Course-Submission-Version',
		techs: "Android Studio, Java, HyperSQL, Gitlab",
        projImage: eezy,
	},
	{
		title: 'Music Habit Tracker',
        description: "The Music Habit Tracker is a user-friendly tool designed to help you cultivate and maintain your musical taste. The intuitive interface leverages key HCI principles to ensure ease of use, making it a perfect companion for both beginners and seasoned musicians alike.",
        link: 'https://github.com/ramanbhandari/Human-Computer-Interaction-Project-Website',
		techs: "HTML, JavaScript, CSS, HCI Priciples, Accessibility",
        projImage: hci,
    }
];

export default ProjectsList;
