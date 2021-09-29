import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";

const PkgList: React.FunctionComponent = () => {
    const [term, setTerm] = useState('');
    const { searchPkg } = useActions();
    const { data, err, loading } = useTypedSelector(
        (state:any) => state.pkgs
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchPkg(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e:any) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {err && <h3>{err}</h3>}
            {loading && <h3>Loading...</h3>}
            {!err && !loading && data.map((pkgRecord:any)=>
                <div key={pkgRecord.name}>
                    {pkgRecord.name}
                </div>
            )}
        </div>
    );
};

export default PkgList;