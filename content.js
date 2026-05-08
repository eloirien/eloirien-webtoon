// UNIVERSAL LANGUAGE & EPISODE DATABASE
const LUMINUS_DB = {
    // 1. Shared UI Elements (Nav, Footer, Status)
    ui: {
        EN: { home: "home", about: "about", comics: "comics", status: "In Progress", episodes: "Episodes" },
        ID: { home: "beranda", about: "tentang", comics: "arsip", status: "Sedang Berjalan", episodes: "Episode" },
        JP: { home: "ホーム", about: "著者", comics: "漫画", status: "連載中", episodes: "エピソード" },
        KR: { home: "홈", about: "정보", comics: "만화", status: "연재 중", episodes: "에피소드" }
    },

    // 2. The Great Library (The only place you update for new chapters)
    library: {
        1: { 
            name: { EN: "Prologue: Storm", ID: "Prolog: Badai", JP: "プロローグ: 嵐", KR: "프롤로그: 폭풍" }, 
            panels: 22, date: "2026-01-10", thumb: "images/ep1-thumb.webp" 
        },
        2: { 
            name: { EN: "Prologue: The King", ID: "Prolog: Sang Raja", JP: "プロローグ: 王", KR: "프롤로그: 왕" }, 
            panels: 18, date: "2026-02-15", thumb: "images/ep2-thumb.webp" 
        },
        // ... (Scale to 100+ here!)
    },

    // 3. Page-Specific Text (Synopses, About sections)
    pages: {
        index: {
            EN: { synopsis: "A world of logic and steel..." },
            ID: { synopsis: "Dunia logika dan baja..." }
        },
        about: {
            EN: { creator: "**Eloirien** is an Illustrator..." },
            ID: { creator: "**Eloirien** adalah Ilustrator..." }
        }
    }
};
