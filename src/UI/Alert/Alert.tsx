import ErrorIcon from '../../assets/images/error.svg';

const Alert = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="bg-gray-100 rounded-2xl p-2 h-[50vh]">
            <div className="max-w-lg h-full mx-auto bg-white rounded-2xl shadow p-3.5 border border-gray-200 flex items-center justify-center flex-col">
                <img src={ErrorIcon} alt="Comment" className='w-60 h-60' />
                <div className="alert alert-info text-lg font-medium">
                    Function not implemented.
                </div>
                <button onClick={onClose} className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-base transition cursor-pointer" >
                    Ok, Got it!
                </button>
            </div>
        </div>
    );
}
export default Alert;