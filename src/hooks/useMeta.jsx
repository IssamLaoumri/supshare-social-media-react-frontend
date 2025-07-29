import { useEffect } from 'react';

const useMeta = ({ title, description, og = {} }) => {
    useEffect(() => {
        if (title) document.title = title;

        const setMeta = (name, value, isProperty = false) => {
            let meta = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute(isProperty ? "property" : "name", name);
                document.head.appendChild(meta);
            }
            meta.setAttribute("content", value);
        };

        if (description) setMeta("description", description);
        if (og.title) setMeta("og:title", og.title, true);
        if (og.description) setMeta("og:description", og.description, true);
        if (og.image) setMeta("og:image", og.image, true);
    }, [title, description, og]);
}

export default useMeta;