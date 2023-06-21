import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoute } from './Routes';
import MainLayout from './Layouts/MainLayout';
import React from 'react';

function App() {
    return (
        <div className={'main'}>
            <BrowserRouter>
                <Routes>
                    {publicRoute.map((route, idx) => {
                        const Component = route.component;
                        let Layouts = MainLayout;
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <Layouts>
                                        <React.Suspense fallback={<div>Loading...</div>}>
                                            <Component />
                                        </React.Suspense>
                                    </Layouts>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
