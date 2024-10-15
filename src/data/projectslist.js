import eezy from "../assets/eezy.png";
import hci from "../assets/hci.png";
import payoffPal from "../assets/payoffPal.png";
import rustySoundFlow from "../assets/rusty-flow.gif";
import chatServer from "../assets/chat-server.gif";
const ProjectsList = [
	{
		title: "PayoffPal (September 2024 - present)",
		description:
			"Developing PayoffPal, a comprehensive personal finance app that helps users manage debt repayment strategies, track budgets, and monitor financial progress. The app provides tools for calculating optimal payoff plans, creating custom budgets, and offering financial tips for better money management.",
		link: "https://github.com/ramanbhandari/payoffpal-api",
		multipleRepoLink: "https://github.com/ramanbhandari/payoffpal-ui",
		repoNameBackend: "Payoffpal-api",
		repoNameFrontend: "Payoffpal-ui",
		techs: "Ruby on Rails, PostgreSQL, Expo, React Native, Axios",
		projImage: payoffPal,
	},
	{
		title: "Rusty Sound Flow",
		description:
			"Built Rusty Sound Flow, a real-time audio visualization tool that supports both microphone input and audio file input. The application processes audio data and visualizes it using frequency spectrums and waveforms. It is optimized for performance, ensuring low-latency audio processing with real-time feedback.",
		link: "https://github.com/ramanbhandari/rusty-sound-flow",
		techs: "Rust, WGPU, Rodio, RustFFT, Clap",
		projImage: rustySoundFlow,
	},
	{
		title: "Discordn't Chat Server: Single-Threaded Performance Analysis",
		description:
			"Developed Discordn't, a single-threaded chat server capable of handling multiple clients using non-blocking sockets and select calls. Conducted an extensive performance analysis by simulating multiple clients sending and receiving messages in real-time. Evaluated server scalability and throughput across varying client loads, with boxplot visualizations revealing how message throughput (sent and received) changes as client numbers increase.",
		link: "https://github.com/ramanbhandari/comp3010-a1",
		techs: "Python, Sockets, Non-blocking I/O, Pandas, Matplotlib",
		projImage: chatServer,
	},
	{
		title: "Eezy: Personal Manager",
		description:
			"Developed a personal organizer app group project featuring a calendar, checklist, events, and password manager using Android Studio and Java. Utilized HyperSQL for secure data storage and efficient management.",
		link: "https://github.com/ramanbhandari/Eezy-Course-Submission-Version",
		techs: "Android Studio, Java, HyperSQL, Gitlab",
		projImage: eezy,
	},
	{
		title: "Music Habit Tracker",
		description:
			"The Music Habit Tracker is a user-friendly tool designed to help you cultivate and maintain your musical taste. The intuitive interface leverages key HCI principles to ensure ease of use, making it a perfect companion for both beginners and seasoned musicians alike.",
		link: "https://github.com/ramanbhandari/Human-Computer-Interaction-Project-Website",
		techs: "HTML, JavaScript, CSS, HCI Priciples, Accessibility",
		projImage: hci,
	},
];

export default ProjectsList;
