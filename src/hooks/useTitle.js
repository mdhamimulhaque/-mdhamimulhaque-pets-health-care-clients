import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Pets Health Care`;
    }, [title])
}

export default useTitle;