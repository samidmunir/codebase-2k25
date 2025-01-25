const LoginButton = ({loading}: {loading: boolean}) => {
    return (
        <button 
            disabled={loading}
            className='text-zinc-100 bg-zinc-800 py-1 px-2 font-semibold w-[100px] hover:bg-sky-500 hover:text-zinc-100 hover:scale-110 transition-all cursor-default'
        >{loading ? 'Loading...' : 'Login'}</button>
    );
}

export default LoginButton