import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Kelas from './Kelas';
import Pembayaran from './Pembayaran';
import Petugas from './Petugas';
import Siswa from './Siswa';
import Spp from './Spp';
import Tunggakan from './Tunggakan';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/kelas" element={<Kelas/>}/>
        <Route path="/pembayaran" element={<Pembayaran/>}/>
        <Route path="/petugas" element={<Petugas/>}/>
        <Route path="/siswa" element={<Siswa/>}/>
        <Route path="/spp" element={<Spp/>}/>
        <Route path="/tunggakan" element={<Tunggakan/>}/>
    </Routes>
)

export default Utama;