// UNIVERSAL LANGUAGE & EPISODE DATABASE 
const LUMINUS_DB = {
        ui: {
            EN: { 
                home: "home", comics: "comics", about: "about", status: "Main Story in Progress", 
                comingSoon: "Coming soon", notify: "Notify", episodes: "EPISODES",
                readFirst: "Read First", readNewest: "Read Newest", read: "READ",
                prev: "Prev", next: "Next", selectRecord: "Select Record",
                errTitle: "OH, NO! Alice got lost!",
                errSub: "We're helping her find the way home...",
                errRetry: "Launch Rescue Mission",
                    connectCreator: "Connect with the Creator",
                    webtoonLink: "https://www.webtoons.com/p/community/en/u/eloirien"
            },
            ID: { 
                home: "beranda", comics: "komik", about: "tentang", status: "Cerita Utama Berjalan", 
                comingSoon: "Segera hadir", notify: "Beritahu", episodes: "EPISODE",
                readFirst: "Baca Awal", readNewest: "Baca Terbaru", read: "BACA",
                prev: "Sblm", next: "Slnjt", selectRecord: "Pilih Rekaman",
                errTitle: "OH, TIDAK! Alice tersesat!",
                errSub: "Kami sedang membantunya menemukan jalan pulang...",
                errRetry: "Luncurkan Misi Penyelamatan",
                    connectCreator: "Terhubung dengan Kreator",
                    webtoonLink: "https://www.webtoons.com/p/community/id/u/eloirien"
            },
            JA: { 
                home: "ホーム", comics: "コミック", about: "概要", status: "連載中", 
                comingSoon: "近日公開", notify: "通知を受け取る", episodes: "エピソード",
                readFirst: "最初から読む", readNewest: "最新話を読む", read: "読む",
                prev: "前へ", next: "次へ", selectRecord: "記録を選択",
                errTitle: "大変！アリスが迷子になっちゃった！",
                errSub: "帰り道を探してあげているところです...",
                errRetry: "救出作戦を開始する",
                    connectCreator: "クリエイターとつながる",
                    webtoonLink: ""
            },
            KO: { 
                home: "홈", comics: "코믹스", about: "정보", status: "연재 중", 
                comingSoon: "곧 공개", notify: "알림 받기", episodes: "에피소드",
                readFirst: "첫 회 보기", readNewest: "최신 회 보기", read: "읽기",
                prev: "이전", next: "다음", selectRecord: "기록 선택",
                errTitle: "이런! 앨리스가 길을 잃었어요!",
                errSub: "집으로 돌아갈 수 있도록 돕는 중입니다...",
                errRetry: "구조 작전 개시",
                    connectCreator: "크리에이터와 소통하기",
                    webtoonLink: ""
            }
        },

    library: {
        1: {
            status: "released",
            name: { EN: "Prologue: Storm", ID: "Prolog: Badai", JA: "プロローグ: 嵐", KO: "프롤로그: 폭풍" },
            date: { EN: "Nov 01, 2025", ID: "01 Nov 2025", JA: "2025年11月01日", KO: "2025년 11월 01일" },
            panels: 22,
            thumb: "images/episodes/thumbnails/ep1-thumb.webp"
        },
        2: {
            status: "released",
            name: { EN: "Prologue: The King", ID: "Prolog: Sang Raja", JA: "プロローグ: 王", KO: "프롤로그: 왕" },
            date: { EN: "Nov 29, 2025", ID: "29 Nov 2025", JA: "2025年11月29日", KO: "2025년 11월 29日" },
            panels: 17,
            thumb: "images/episodes/thumbnails/ep2-thumb.webp"
        },
        3: {
            status: "released",
            name: { EN: "Prologue: The Cup", ID: "Prolog: Cawan", JA: "プロローグ: 杯", KO: "프롤로그: 잔" },
            date: { EN: "Jan 04, 2026", ID: "04 Jan 2026", JA: "2026年01月04日", KO: "2026년 01월 04일" },
            panels: 21,
            thumb: "images/episodes/thumbnails/ep3-thumb.webp"
        },
        4: {
            status: "released",
            name: { EN: "01 - Who (Part 1)", ID: "01 - Siapa (Bagian 1)", JA: "01 - 誰 (前編)", KO: "01 - 누구 (1부)" },
            date: { EN: "Feb 07, 2026", ID: "07 Feb 2026", JA: "2026年02月07日", KO: "2026년 02월 07일" },
            panels: 15,
            thumb: "images/episodes/thumbnails/ep4-thumb.webp"
        },
        5: {
            status: "released",
            name: { EN: "01 - Who (Part 2)", ID: "01 - Siapa (Bagian 2)", JA: "01 - 誰 (後編)", KO: "01 - 누구 (2부)" },
            date: { EN: "Mar 08, 2026", ID: "08 Mar 2026", JA: "2026年03月08日", KO: "2026년 03월 08일" },
            panels: 24,
            thumb: "images/episodes/thumbnails/ep5-thumb.webp"
        },
        6: {
            status: "released",
            name: { EN: "02 - Friend (Part 1)", ID: "02 - Teman (Bagian 1)", JA: "02 - 友 (前編)", KO: "02 - 친구 (1부)" },
            date: { EN: "Apr 23, 2026", ID: "23 Apr 2026", JA: "2026年04月23日", KO: "2026년 04월 23日" },
            panels: 23,
            thumb: "images/episodes/thumbnails/ep6-thumb.webp" // Unified to .webp
        },
        7: {
            status: "upcoming",
            name: { EN: "02 - Friend (Part 2)", ID: "02 - Teman (Bagian 2)", JA: "02 - 友達 (後編)", KO: "02 - 친구 (후편)" },
            dateLabel: "EP 07",
            date: { EN: "COMING SOON", ID: "SEGERA HADIR", JA: "近日公開", KO: "곧 공개" },
            thumb: "" 
        }
    },

    pages: {
        index: {
            EN: { 
                tabs: ["INFO", "EPISODES", "GALLERY"], 
                genres: ["Fantasy", "Drama", "Action"], 
                specialGenres: ["Fantasy", "Slice of Life"],
                synopsisHTML: `<p class="text-sm leading-relaxed text-gray-400 text-left mb-4">Both Alicia and Archius have to fight for their identity while fulfilling their duty to protect the kingdom from an emerging power of darkness. How will their intertwined destinies be revealed?</p>
                <em class="text-xs italic border-l-2 border-blue-600 pl-3 block mt-2 text-left text-gray-500">"For we are not fighting against flesh-and-blood enemies, but against evil rulers and authorities of the unseen world, against mighty powers in this dark world, and against evil spirits in the heavenly places."</em>` 
            },
            ID: { 
                tabs: ["INFO", "EPISODE", "GALERI"], 
                genres: ["Fantasi", "Drama", "Aksi"], 
                specialGenres: ["Fantasi", "Kisah Sehari-hari"],    
                synopsisHTML: `<p class="text-sm leading-relaxed text-gray-400 text-left mb-4">Baik Alicia maupun Archius harus menghadapi pergumulan identitas mereka sembari menjalankan tugas untuk menjaga kerajaan dari ancaman bangkitnya kuasa kegelapan. Bagaimanakah takdir mereka yang saling bertautan itu akan terungkap?</p>
                <em class="text-xs italic border-l-2 border-blue-600 pl-3 block mt-2 text-left text-gray-500">"Sebab, pertarungan itu bukanlah melawan darah dan daging, melainkan melawan penguasa-penguasa, melawan otoritas-otoritas, melawan penghulu dunia kegelapan, melawan roh-roh jahat di alam semesta."</em>` 
            },
            JA: { 
                tabs: ["情報", "エピソード", "ギャラリー"], 
                genres: ["ファンタジー", "ドラマ", "アクション"], 
                specialGenres: ["ファンタジー", "日常"],
                synopsisHTML: `<p class="text-sm leading-relaxed text-gray-400 text-left mb-4">アリシアとアルキウスは、湧き上がる闇の勢力から王国を守るという使命を果たしながら、己のアイデンティティを懸けた闘いに身を投じていく。分かちがたく結ばれた二人の運命は、いかなる結末を迎えるのか。</p>
                <em class="text-xs italic border-l-2 border-blue-600 pl-3 block mt-2 text-left text-gray-500">我らの戦いは、血肉を相手にするものではなく、支配者、権威、この暗闇の世界の支配者たち、また、天にいる悪の霊に対する戦いである。</em>` 
            },
            KO: { 
                tabs: ["정보", "에피소드", "갤러리"], 
                genres: ["판타지", "드라마", "액션"], 
                specialGenres: ["판타지", "일상"],
                synopsisHTML: `<p class="text-sm leading-relaxed text-gray-400 text-left mb-4">알리시아와 아르키우스는 깨어나는 어둠의 세력으로부터 왕국을 지켜야 하는 숙명 속에서, 각자의 정체성을 찾기 위한 치열한 사투를 벌인다. 서로의 운명이 얽히고설킨 두 사람의 앞날에는 과연 무엇이 기다리고 있을 것인가?</p>
                <em class="text-xs italic border-l-2 border-blue-600 pl-3 block mt-2 text-left text-gray-500">우리의 씨름은 혈과 육을 상대하는 것이 아니요 통치자들과 권세들과 이 어둠의 세상 주관자들과 하늘에 있는 악의 영들을 상대함이라.</em>` 
            }
        },
        // Corrected about section for content.js
        about: {
            EN: {
                navHome: "home", navComics: "comics",
                creator: "**As a passionate storyteller with more than three years of experience creating digital comics and illustrations, Eloirien's goal is to tell stories that touch souls and hearts for the glory of God.**\n\n*I'm truly inspired by the greatest storyteller of all time: Jesus Christ. For me, every brushstroke is a prayer. I hope my art will be a blessing to you as much as it is a blessing to me.*",
                silverstring: "**Silverstring is a Bible-inspired fantasy that delves into the struggle for identity and the weight of spiritual warfare.**\n\n*Silverstring is a passion project that I do on the side, in my free time, and completely solo right now, so updates might be slow and irregular. Still, I'll do my best to continue working on it.*",
                bethlehem: "**Project Bethlehem serves as the creative umbrella for the independent intellectual properties developed by Eloirien.**"
            },
            ID: {
                navHome: "home", navComics: "komik",
                creator: "**Sebagai pencerita yang penuh dengan passion, dengan lebih dari tiga tahun pengalaman menciptakan komik digital dan ilustrasi, impian Eloirien adalah menceritakan kisah yang menyentuh hati dan jiwa demi kemuliaan Tuhan.**\n\n*Saya sangat terinspirasi oleh pencerita terhebat sepanjang masa: Yesus KOistus. Bagi saya, setiap sapuan kuas adalah doa. Saya berharap karya saya menjadi berkat bagi Anda sebagaimana ia menjadi berkat bagi saya.*",
                silverstring: "**Silverstring adalah sebuah fantasi bertemakan Alkitab yang mendalami pergumulan identitas dan beratnya peperangan rohani.**\n\n*Silverstring adalah passion project yang saya kerjakan sebagai sampingan di waktu luang. Saat ini saya mengerjakannya sepenuhnya sendirian, jadi jadwal updatenya mungkin terasa lambat dan tidak menentu. Meski begitu, saya akan berusaha sebaik mungkin untuk terus melanjutkan proyek ini!*",
                bethlehem: "**Project Bethlehem berfungsi sebagai payung KOeatif untuk kekayaan intelektual independen yang dikembangkan oleh Eloirien.**"
            },
            JA: {
                navHome: "ホーム", navComics: "コミック",
                creator: "**デジタルコミックやイラスト制作で3年以上の経験を持つストーリーテラーとして、Eloirienの目標は神の栄光のために魂と心に響く物語を伝えることです。**\n\n*私は史上最高のストーリーテラーであるイエス・キリストから真にインスピレーションを受けています。私にとって、すべての筆致は祈りです。私の作品が私にとっての祝福であるのと同じくらい、あなたにとっても祝福となることを願っています。*",
                silverstring: "**「Silverstring」は、聖書にインスパイアされたファンタジーであり、アイデンティティを懸けた葛藤と、霊的戦いの重みを深く描き出しています。**\n\n*「Silverstring」は、私が空いた時間に個人で制作している情熱プロジェクト（パッションプロジェクト）です。現在はすべて一人で作業しているため、更新が遅れたり不定期になったりするかもしれません。それでも、描き続けられるよう精一杯頑張りますので、どうぞよろしくお願いいたします。*",
                bethlehem: "**プロジェクト・ベツレヘムは、Eloirienが展開するインディーIPのクリエイティブ・アンブレラ。**"
            },
            KO: {
                navHome: "홈", navComics: "코믹스",
                creator: "**디지털 코믹스와 일러스트레이션 제작 분야에서 3년 이상의 경험을 쌓은 열정적인 스토리텔러로서, Eloirien의 목표는 하나님의 영광을 위해 영혼과 마음을 울리는 이야기를 전하는 것입니다**\n\n*저는 역사상 위대한 스토리텔러인 예수 그리스도에게서 진정한 영감을 얻습니다. 저에게 모든 붓터치는 기도입니다. 제 예술이 저에게 축복인 만큼 여러분에게도 축복이 되기를 바랍니다.*",
                silverstring: "**「Silverstring」은 성경에서 영감을 받은 판타지물로, 자아 정체성을 찾기 위한 고뇌와 영적 전쟁의 무게를 심도 있게 다룹니다.**\n\n*「Silverstring」은 제가 개인적인 시간에 틈틈이 작업하고 있는 열정 프로젝트(passion project)입니다. 현재는 모든 과정을 혼자서 진행하고 있어 업데이트가 다소 늦어지거나 불규칙할 수 있습니다. 그럼에도 최선을 다해 꾸준히 연재할 수 있도록 노력하겠습니다. 항상 감사드립니다.*",
                bethlehem: "**프로젝트 베들레헴은 Eloirien이 개발하는 독립 IP의 크리에이티브 우산입니다.**"
            }
        }
    }

        // =========================================================================
// PASTE KODE INI DI BAGIAN PALING BAWAH FILE content.js (DI LUAR OBJEK LUMINUS_DB)
// =========================================================================

function injectSocialMedia(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Ambil bahasa aktif dari hash URL, jika kosong ambil dari localStorage atau default ke EN
    const currentLang = window.location.hash.replace('#', '').toUpperCase() || localStorage.getItem('preferredLang') || 'EN';
    
    // 1. Ambil teks label dinamis dari DB
    const labelText = (LUMINUS_DB.ui[currentLang] && LUMINUS_DB.ui[currentLang].connectCreator) 
                      ? LUMINUS_DB.ui[currentLang].connectCreator 
                      : "Connect with the Creator";

    // Jaring pengaman link default (English) jika regional lock
    const defaultWebtoonLink = "https://www.webtoons.com/p/community/en/u/eloirien";
    let activeWebtoonLink = defaultWebtoonLink;

    // 2. Ambil LINK Webtoon secara dinamis dengan proteksi region lock
    if (LUMINUS_DB.ui[currentLang] && LUMINUS_DB.ui[currentLang].webtoonLink) {
        const regionalLink = LUMINUS_DB.ui[currentLang].webtoonLink.trim();
        // Jika link regional tidak kosong atau bukan tanda pagar, maka pakai link tersebut
        if (regionalLink !== "" && regionalLink !== "#") {
            activeWebtoonLink = regionalLink;
        }
    }

    container.innerHTML = `
        <div class="mt-12 flex flex-col items-center space-y-4">
            <p id="social-connect-text" class="text-[9px] font-bold tracking-[0.3em] text-gray-500 uppercase">${labelText}</p>
            
            <div class="flex flex-wrap justify-center gap-4">
                
                <a href="https://instagram.com/username_kamu" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center space-x-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-gray-800 hover:border-pink-500 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all duration-300 shadow-md group">
                    <svg class="w-4 h-4 text-gray-500 group-hover:text-pink-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span class="tracking-wider">Instagram</span>
                </a>

                <a href="https://x.com/username_kamu" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center space-x-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-gray-800 hover:border-blue-400 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all duration-300 shadow-md group">
                    <svg class="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    <span class="tracking-wider">X / Twitter</span>
                </a>

                <a href="${activeWebtoonLink}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center space-x-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-gray-800 hover:border-green-500 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all duration-300 shadow-md group">
                    <img src="images/branding/logo/webtoon-icon.png" alt="WEBTOON Logo" class="w-4 h-4 object-contain opacity-50 group-hover:opacity-100 transition-opacity">
                    <span class="tracking-wider">Webtoon Profile</span>
                </a>

            </div>
        </div>
    `;
}
};
