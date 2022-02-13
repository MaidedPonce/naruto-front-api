import React from "react";
function useLazy() {

    const isIntersect = (entry) => {
        return entry.isIntersecting
    }

    const loadingImage = (entry) => {
        const container = entry.target
        console.log(container)
    }

    const observer = new IntersectionObserver(entries => {
        /* const { isIntersecting } = entries[0]
        return isIntersecting */

        entries.filter(isIntersect).forEach(loadingImage)
    })

    const watch = (image) => {
        observer.observe(image)
    }

    return (
        watch
    )

}

export default useLazy;