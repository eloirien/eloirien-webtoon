// UNIVERSAL LANGUAGE & EPISODE DATABASE
const LUMINUS_DB = {
    // 1. Shared UI Elements (Nav, Footer, Status)
    ui: {
        EN: { home: "home", about: "about", comics: "comics", status: "Main Story In Progress", episodes: "Episodes" },
        ID: { home: "beranda", about: "tentang", comics: "komik", status: "Cerita Utama Sedang Berjalan", episodes: "Episode" },
        JP: { home: "ホーム", about: "著者", comics: "漫画", status: "連載中", episodes: "エピソード" },
        KR: { home: "홈", about: "정보", comics: "만화", status: "연재 중", episodes: "에피소드" }
    },

    // 2. The Great Library (The only place you update for new chapters)
    library: {
        1: { 
            name: { EN: "Prologue: Storm", ID: "Prolog: Badai", JP: "プロローグ: 嵐", KR: "프롤로그: 폭풍" }, 
            panels: 22, date: "Nov 01, 2025", thumb: "images/ep1-thumb.webp" 
        },
        2: { 
            name: { EN: "Prologue: The King", ID: "Prolog: Sang Raja", JP: "プロローグ: 王", KR: "프롤로그: 왕" }, 
            panels: 18, date: "Nov 29, 2025", thumb: "images/ep2-thumb.webp" 
        },
        3: { 
            name: { EN: "Prologue: The Cup", ID: "Prolog: Cawan", JP: "プロローグ: 杯", KR: "프롤로그: 잔" }, 
            panels: 22, date: "Jan 04, 2026", thumb: "images/ep3-thumb.webp" 
        },
        4: { 
            name: { EN: "01 - Who (Part 1)", ID: "01 - Siapa (Bagian 1)", JP: "01 - 誰 (前編)", KR: "01 - 누구 (1부)" }, 
            panels: 22, date: "Feb 07, 2026", thumb: "images/ep4-thumb.webp" 
        },
        5: { 
            name: { EN: "01 - Who (Part 2)", ID: "01 - Siapa (Bagian 2)", JP: "01 - 誰 (後編)", KR: "01 - 누구 (2부)" }, 
            panels: 22, date: "Mar 08, 2026", thumb: "images/ep5-thumb.webp" 
        },
        6: { 
            name: { EN: "02 - Friend (Part 1)", ID: "02 - Teman (Bagian 1)", JP: "02 - 友 (前編)", KR: "02 - 친구 (1부)" }, 
            panels: 22, date: "Apr 23, 2026", thumb: "images/ep6-thumb.webp" 
        },
        7: { 
            name: { EN: "02 - Friend (Part 2)", ID: "02 - Teman (Bagian 2)", JP: "02 - 友 (後編)", KR: "02 - 친구 (2부)" }, 
            panels: 22, date: "in progress", thumb: "images/ep7-thumb.webp" 
        },
       
    },

    // 3. Page-Specific Text (Synopses, About sections)
    pages: {
        index: {
            EN: { synopsis: "A world of logic and steel..." },
            ID: { synopsis: "Dunia logika dan baja..." },
            ID: { synopsis: "Dunia logika dan baja..." },
            ID: { synopsis: "Dunia logika dan baja..." }
        },
        
        about: {
            EN: { creator: "**Eloirien** is an Illustrator..." },
            ID: { creator: "**Eloirien** adalah Ilustrator..." },
            JP: { creator: "**Eloirien** adalah Ilustrator..." },
            KR: { creator: "**Eloirien** adalah Ilustrator..." }
            
        }
    }
};
