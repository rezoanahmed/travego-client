import {BiLogoPlayStore} from 'react-icons/bi'
import {PiAppStoreLogoBold} from 'react-icons/pi'
const Devices = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div>
                    <img src="https://i.ibb.co/mySg7vR/Minimalist-Website-Launch-Computer-Mockup-Instagram-Post.png" alt="device" className="md:h-[500px]" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold md:max-w-[650px]">Now You Can Get Us From Google Play Store & App Store</h1>
                    <div className="flex flex-col mt-10 gap-2">
                        <button className='flex gap-2 justify-center items-center p-2 rounded-md bg-green-500 dark:bg-green-800'><BiLogoPlayStore></BiLogoPlayStore>Download From Google Play Store</button>
                        <button className='flex gap-2 justify-center items-center p-2 rounded-md bg-blue-500 dark:bg-blue-800'><PiAppStoreLogoBold></PiAppStoreLogoBold>Download From App Store</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Devices;