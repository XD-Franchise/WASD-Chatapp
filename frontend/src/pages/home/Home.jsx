import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row h-screen sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar className="w-full sm:w-1/4" />
			<MessageContainer className="w-full sm:w-3/4" />
		</div>
	);
};

export default Home;
