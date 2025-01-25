const AuthButton = ({
    type,
    loading,
}: {
    type: 'login' | 'Sign up' | 'Reset password' | 'Forgot password';
    loading: boolean;
}) => {
    return (
        <button
            disabled={loading}
            type='submit'
        >{loading ? 'Loading...' : type}</button>
    );
}

export default AuthButton