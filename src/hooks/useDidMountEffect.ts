import { useEffect, useRef } from 'react';

const useDidMountEffect = <T>(func: Function, deps: Array<T>) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
};

export default useDidMountEffect;