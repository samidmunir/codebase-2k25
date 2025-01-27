const LoginButton = ({loading}: {loading: boolean}) => {
    return (
        <button
            disabled={loading}
            className='border-2 border-neutral-400 py-1 px-2 text-neutral-400 font-semibold shadow-xl hover:bg-neutral-400 hover:text-zinc-900 hover:scale-110 transition-all cursor-default'
        >{loading ? 'Loading...' : 'Login'}</button>
    );
}

export default LoginButton