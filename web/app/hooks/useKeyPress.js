import React from 'react'

export default function useKeyPress(key, action) {
    React.useEffect(() => {
        function onKeyUp(e) {
            if (e.key === key) {
                action()
            }
        }
        window.addEventListener('keyup', onKeyUp);
        return () => window.removeEventListener('keyup', onKeyUp);
    }, []);
}
