/**
 * XENTRIXSENSI CORE ENGINE - ENHANCED
 * Advanced animations, scrolling effects, and optimized performance
 */

// --- 1. CONFIGURATION ---
const CONFIG = {
    qris: "assets/qris.jpg",
    wa: "628895823757",
    webhook: "https://discord.com/api/webhooks/1462093167619997953/YJoFvj1-gmkeDDT49akVa-gVTGxJr1SMLWni91-Pdtt0FiaZKxat7u4d8n-KaFI4lTit"
};

// --- 2. DATA MASTER ---
const PRODUCTS = [
    { 
        id: 1, 
        name: 'Xentrix Android VVIP', 
        cat: 'ANDROID', 
        price: 45000, 
        img: 'assets/banner-ios.jpg',
        features: ['Auto Headshot 85%', 'Anti-Lag Optimization', 'Fix Sensi No Licin', 'Support All Android'],
        description: 'Premium settings optimized for Android devices with enhanced accuracy.',
        bestseller: true
    },
    { 
        id: 2, 
        name: 'Xentrix Android Pro', 
        cat: 'ANDROID', 
        price: 35000, 
        img: 'assets/banner-ios.jpg',
        features: ['Auto Headshot 75%', 'Smooth Aim Assist', 'Stable FPS Config', 'Middle Range Support'],
        description: 'Professional settings for intermediate players seeking improvement.',
        bestseller: false
    },
    { 
        id: 3, 
        name: 'Xentrix Android Basic', 
        cat: 'ANDROID', 
        price: 25000, 
        img: 'assets/banner-ios.jpg',
        features: ['Auto Headshot 60%', 'Basic Optimization', 'No Lag Settings', 'Beginner Friendly'],
        description: 'Perfect for beginners starting their competitive journey.',
        bestseller: false
    },
    { 
        id: 4, 
        name: 'Coming Soon', 
        cat: 'IOS', 
        price: 100000, 
        img: 'assets/banner-ios.jpg',
        features: ['Advanced Optimization', 'iOS Exclusive', 'Premium Support', 'Regular Updates'],
        description: 'Premium iOS optimization coming soon. Stay tuned!',
        bestseller: false
    },
    { 
        id: 5, 
        name: 'Xentrix PC Elite', 
        cat: 'PC', 
        price: 85000, 
        img: 'assets/banner-pc.jpg',
        features: ['Macro Script Support', 'Emulator Bypass', 'Mouse Raw Input', 'Stable 144 FPS'],
        description: 'Elite PC configuration for maximum competitive edge.',
        bestseller: true
    },
    { 
        id: 6, 
        name: 'Xentrix PC Standard', 
        cat: 'PC', 
        price: 65000, 
        img: 'assets/banner-pc.jpg',
        features: ['Basic Macro Support', 'Emulator Optimization', 'Mouse Fix', 'Stable 120 FPS'],
        description: 'Standard PC settings for reliable performance.',
        bestseller: false
    },
];

const FEATURES = [
    { 
        icon: 'bolt', 
        title: 'High Performance', 
        desc: 'Maximum input delay optimization for smooth gameplay with zero latency.',
        color: 'from-sky-500/20 to-blue-500/20'
    },
    { 
        icon: 'crosshairs', 
        title: 'Auto Headshot', 
        desc: 'Precision sensitivity settings for accurate shots with scientific calibration.',
        color: 'from-purple-500/20 to-pink-500/20'
    },
    { 
        icon: 'shield-alt', 
        title: 'Safe & Legal', 
        desc: '100% safe without risk of being banned, purely in-game settings optimization.',
        color: 'from-green-500/20 to-emerald-500/20'
    }
];

const TEAM = [
    { 
        name: 'XenzzSettingsx', 
        role: 'CEO & Founder & Developer', 
        img: 'assets/team-dev.jpg',
        socials: {
            whatsapp: '628895823757',
            instagram: 'https://instagram.com/xentrixsensi',
            tiktok: 'https://tiktok.com/@xenzxsukamimisusu',
            discord: 'https://discord.gg/xVAEBmqE'
        },
        bio: 'Lead developer with 5+ years experience in game optimization.'
    },
    { 
        name: 'Admin Sensi', 
        role: 'Reseller & Support', 
        img: 'assets/team-admin.jpg',
        socials: {
            whatsapp: '628895823757',
            tiktok: 'https://tiktok.com/@admin_sensi',
            discord: 'https://discord.gg/xVAEBmqE'
        },
        bio: 'Customer support specialist providing 24/7 assistance.'
    },
    { 
        name: 'Tech Analyst', 
        role: 'Quality Assurance', 
        img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
        socials: {
            whatsapp: '628895823757',
            instagram: 'https://instagram.com/xentrixqa',
            discord: 'https://discord.gg/xVAEBmqE'
        },
        bio: 'Ensuring all settings meet competitive standards and performance benchmarks.'
    }
];

// --- 3. ENHANCED BACKGROUND SYSTEMS ---

// Particle System with Mouse Interaction
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, radius: 100 };
        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25,
                color: `rgba(14, 165, 233, ${Math.random() * 0.3 + 0.1})`,
                originalX: Math.random() * this.canvas.width,
                originalY: Math.random() * this.canvas.height
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (this.mouse.radius - distance) / this.mouse.radius;
                particle.x -= Math.cos(angle) * force * 2;
                particle.y -= Math.sin(angle) * force * 2;
            }
            
            // Return to original position
            const ox = particle.originalX - particle.x;
            const oy = particle.originalY - particle.y;
            particle.x += ox * 0.05;
            particle.y += oy * 0.05;
            
            // Add some random movement
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(14, 165, 233, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    }
}

// Mouse Trail Effect
class MouseTrail {
    constructor() {
        this.canvas = document.getElementById('mouseTrailCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.trail = [];
        this.maxTrail = 15;
        this.init();
    }

    init() {
        this.resize();
        this.animate();
        this.bindEvents();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addPoint(x, y) {
        this.trail.push({ x, y, life: 1 });
        if (this.trail.length > this.maxTrail) {
            this.trail.shift();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
            const point = this.trail[i];
            point.life -= 0.05;
            
            if (point.life <= 0) {
                this.trail.splice(i, 1);
                i--;
                continue;
            }
            
            // Draw glowing circle
            const radius = 5 * point.life;
            const gradient = this.ctx.createRadialGradient(
                point.x, point.y, 0,
                point.x, point.y, radius
            );
            
            gradient.addColorStop(0, 'rgba(14, 165, 233, 0.8)');
            gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.3)');
            gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
            
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }
        
        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        window.addEventListener('mousemove', (e) => {
            this.addPoint(e.clientX, e.clientY);
        });
    }
}

// --- 4. SCROLL ANIMATIONS & PARALLAX ---
class ScrollAnimations {
    constructor() {
        this.sections = document.querySelectorAll('section, header');
        this.backToTop = document.getElementById('backToTop');
        this.nav = document.getElementById('mainNav');
        this.init();
    }

    init() {
        this.checkScroll();
        this.bindEvents();
        this.setupIntersectionObserver();
    }

    checkScroll() {
        // Back to top button
        if (this.backToTop) {
            if (window.scrollY > 500) {
                this.backToTop.style.opacity = '1';
                this.backToTop.style.transform = 'translateY(0)';
            } else {
                this.backToTop.style.opacity = '0';
                this.backToTop.style.transform = 'translateY(20px)';
            }
        }

        // Navigation show/hide
        if (this.nav) {
            if (window.scrollY > 100) {
                this.nav.style.transform = 'translateY(0)';
                this.nav.classList.add('shadow-lg');
            } else {
                this.nav.style.transform = 'translateY(0)';
                this.nav.classList.remove('shadow-lg');
            }
        }
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Add staggered animation to children
                    const children = entry.target.querySelectorAll('.animate-on-scroll, .animate-scale-on-scroll');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('animate-on-scroll');
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.checkScroll());
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to top
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
}

// --- 5. ENHANCED RENDER SYSTEMS ---
window.addEventListener('DOMContentLoaded', () => {
    // Initialize enhanced loading
    initEnhancedLoader();
    
    // Initialize systems
    const particleSystem = new ParticleSystem();
    const mouseTrail = new MouseTrail();
    const scrollAnimations = new ScrollAnimations();
    
    // Render Features
    const featureContainer = document.getElementById('features-container');
    if (featureContainer) {
        featureContainer.innerHTML = FEATURES.map((f, index) => `
            <div class="stagger-item bg-gradient-to-br ${f.color} to-transparent p-8 rounded-3xl border border-white/5 text-center hover:border-sky-500/30 transition-all duration-500 transform hover:-translate-y-2">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-${f.icon} text-sky-500 text-2xl"></i>
                </div>
                <h3 class="text-white font-bold uppercase text-lg mb-3">${f.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">${f.desc}</p>
            </div>
        `).join('');
    }

    // Render Team
    const teamGrid = document.getElementById('team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = TEAM.map(t => `
            <div class="stagger-item bg-gradient-to-br from-[#0a0f1e] to-[#020617] p-8 rounded-[2rem] border border-white/5 flex flex-col items-center group hover:border-sky-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10">
                <div class="relative mb-6">
                    <div class="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative w-24 h-24 rounded-full border-2 border-sky-500/30 p-1 overflow-hidden group-hover:border-sky-500 transition-all duration-500">
                        <img src="${t.img}" class="w-full h-full object-cover rounded-full group-hover:scale-110 transition-all duration-500" 
                             onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}'">
                    </div>
                    <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <h3 class="text-white font-bold uppercase text-lg mb-1">${t.name}</h3>
                <p class="text-sky-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">${t.role}</p>
                <p class="text-slate-400 text-xs text-center mb-6">${t.bio}</p>
                <div class="flex gap-3">
                    ${t.socials.whatsapp ? `<a href="https://wa.me/${t.socials.whatsapp}" target="_blank" class="w-10 h-10 rounded-full bg-green-500/10 hover:bg-green-500 flex items-center justify-center text-green-500 hover:text-white transition-all duration-300 hover:scale-110"><i class="fab fa-whatsapp"></i></a>` : ''}
                    ${t.socials.instagram ? `<a href="${t.socials.instagram}" target="_blank" class="w-10 h-10 rounded-full bg-pink-500/10 hover:bg-pink-500 flex items-center justify-center text-pink-500 hover:text-white transition-all duration-300 hover:scale-110"><i class="fab fa-instagram"></i></a>` : ''}
                    ${t.socials.tiktok ? `<a href="${t.socials.tiktok}" target="_blank" class="w-10 h-10 rounded-full bg-black/10 hover:bg-black flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"><i class="fab fa-tiktok"></i></a>` : ''}
                    ${t.socials.discord ? `<a href="${t.socials.discord}" target="_blank" class="w-10 h-10 rounded-full bg-indigo-500/10 hover:bg-indigo-500 flex items-center justify-center text-indigo-400 hover:text-white transition-all duration-300 hover:scale-110"><i class="fab fa-discord"></i></a>` : ''}
                </div>
            </div>
        `).join('');
    }

    // Initial Product Load
    filterProducts('ANDROID');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            
            if (isOpen) {
                mobileMenu.classList.remove('open');
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
            } else {
                mobileMenu.classList.add('open');
                mobileMenu.style.transform = 'translateY(0)';
                mobileMenu.style.opacity = '1';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
            }
        });
    }
    
    // Close mobile menu when clicking links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenu.style.transform = 'translateY(-100%)';
            mobileMenu.style.opacity = '0';
        });
    });
});

// --- 6. ENHANCED LOADER ---
function initEnhancedLoader() {
    const loader = document.getElementById('loader');
    const loadingBar = document.getElementById('loadingBar');
    
    if (loader && loadingBar) {
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Complete loading
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                        
                        // Show navigation with animation
                        const nav = document.getElementById('mainNav');
                        if (nav) {
                            setTimeout(() => {
                                nav.style.transform = 'translateY(0)';
                            }, 100);
                        }
                        
                        // Trigger initial animations
                        document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-on-scroll');
                            }, index * 100);
                        });
                    }, 500);
                }, 300);
            }
            loadingBar.style.width = `${progress}%`;
        }, 50);
    }
}

// --- 7. CORE FUNCTIONS ---
function filterProducts(cat) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = PRODUCTS.filter(p => p.cat === cat);
    
    grid.innerHTML = filtered.map(p => `
        <div class="stagger-item p-card group flex flex-col bg-gradient-to-br from-[#0a0f1e] to-[#020617] p-6 rounded-[2rem] border border-white/5 hover:border-sky-500/50 transition-all duration-500 relative overflow-hidden">
            ${p.bestseller ? `
                <div class="absolute top-4 right-4 z-10">
                    <span class="bg-gradient-to-r from-yellow-500 to-orange-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Bestseller</span>
                </div>
            ` : ''}
            
            <div class="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 shadow-lg group-hover:shadow-sky-500/20 transition-all duration-500">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                     onerror="this.src='https://via.placeholder.com/500x280/0a0f1e/0ea5e9?text=Xentrix+Sensi'">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent"></div>
            </div>
            
            <div class="mb-6 flex-grow">
                <h3 class="text-white font-bold uppercase text-lg mb-3 tracking-tight">${p.name}</h3>
                <p class="text-slate-400 text-sm mb-4">${p.description}</p>
                <ul class="space-y-2">
                    ${p.features.map(f => `
                        <li class="text-[11px] text-slate-400 flex items-center gap-2 uppercase tracking-widest font-bold">
                            <i class="fas fa-check-circle text-sky-500"></i> ${f}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="mb-6">
                <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Total Investasi</p>
                <p class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 font-black text-2xl leading-none">Rp ${p.price.toLocaleString('id-ID')}</p>
            </div>
            
            <button onclick="openPayment(${p.id})" class="btn-primary w-full justify-center text-center py-4 rounded-xl font-black uppercase text-xs tracking-widest group-hover:shadow-sky-500/30">
                <i class="fas fa-shopping-cart mr-2"></i> Beli Sekarang
            </button>
        </div>
    `).join('');
    
    // Add staggered animation
    grid.querySelectorAll('.stagger-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Update active tab
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`tab-${cat}`);
    if (activeTab) activeTab.classList.add('active');
}

let currentOrder = null;

function openPayment(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    currentOrder = { 
        ...p, 
        orderId: 'XENT' + Date.now().toString().slice(-8),
        timestamp: new Date().toISOString()
    };

    const qrisImg = document.getElementById('qris-img');
    const payProduct = document.getElementById('pay-product');
    const payAmount = document.getElementById('pay-amount');
    const modal = document.getElementById('payment-modal');

    if (qrisImg) qrisImg.src = CONFIG.qris;
    if (payProduct) payProduct.innerText = p.name;
    if (payAmount) payAmount.innerText = "Rp " + p.price.toLocaleString('id-ID');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.querySelector('div').style.transform = 'scale(1)';
        }, 10);
    }
    document.body.style.overflow = 'hidden';

    // Track sales in localStorage
    try {
        let sales = JSON.parse(localStorage.getItem('xentrix_sales')) || [];
        sales.push({ 
            id: currentOrder.orderId, 
            date: new Date().toLocaleDateString('id-ID'), 
            time: new Date().toLocaleTimeString('id-ID'),
            item: p.name, 
            price: p.price 
        });
        localStorage.setItem('xentrix_sales', JSON.stringify(sales));
    } catch (e) { console.error("Storage error:", e); }
    
    // Show notification
    showToast(`Added ${p.name} to cart`);
}

function closePayment() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.querySelector('div').style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 200);
    }
    document.body.style.overflow = 'auto';
}

function confirmToWA() {
    if (!currentOrder) return;
    const text = `*KONFIRMASI PEMBAYARAN XENTRIXSENSI*\n\n📦 ID Order: #${currentOrder.orderId}\n🎮 Produk: ${currentOrder.name}\n💰 Total: Rp ${currentOrder.price.toLocaleString('id-ID')}\n\nHalo Admin, saya sudah melakukan pembayaran via QRIS. Mohon segera diproses!`;
    window.open(`https://api.whatsapp.com/send?phone=${CONFIG.wa}&text=${encodeURIComponent(text)}`);
}

// --- 8. TOAST NOTIFICATION SYSTEM ---
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    
    // Set color based on type
    if (type === 'error') {
        toast.style.background = 'linear-gradient(to right, #ef4444, #dc2626)';
    } else if (type === 'warning') {
        toast.style.background = 'linear-gradient(to right, #f59e0b, #d97706)';
    } else {
        toast.style.background = 'linear-gradient(to right, #0ea5e9, #2563eb)';
    }
    
    toast.style.transform = 'translateX(0)';
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
    }, 3000);
}

// --- 9. SCROLL UTILITIES ---
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 10. ENHANCED DISCORD WEBHOOK SYSTEM ---
async function sendToDiscord() {
    const nameInput = document.getElementById('webhook-name');
    const phoneInput = document.getElementById('webhook-phone');
    const msgInput = document.getElementById('webhook-msg');
    const btn = document.getElementById('webhook-btn');

    if (!nameInput || !phoneInput || !msgInput || !btn) return;
    
    // Validate all fields
    if (!nameInput.value.trim() || !phoneInput.value.trim() || !msgInput.value.trim()) {
        showToast("Please fill in all fields!", 'warning');
        return;
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneInput.value.replace(/\D/g, ''))) {
        showToast("Please enter a valid WhatsApp number!", 'warning');
        return;
    }

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> SENDING...`;

    const embedData = {
        username: "XENTRIXSENSI SUPPORT",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        embeds: [{
            title: "📩 New Support Message",
            color: 5814783,
            fields: [
                { name: "👤 Sender Name", value: `\`\`\`${nameInput.value}\`\`\``, inline: true },
                { name: "📱 WhatsApp", value: `\`\`\`${phoneInput.value}\`\`\``, inline: true },
                { name: "💬 Message", value: msgInput.value.substring(0, 1000), inline: false }
            ],
            footer: {
                text: "XentrixSensi Management System • " + new Date().toLocaleString('id-ID'),
            },
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const response = await fetch(CONFIG.webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(embedData)
        });

        if (response.ok) {
            showToast("Message sent successfully! We'll contact you soon.");
            nameInput.value = "";
            phoneInput.value = "";
            msgInput.value = "";
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (e) {
        console.error('Webhook error:', e);
        showToast("Failed to send message. Please contact us via WhatsApp directly.", 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}

// --- 11. PERFORMANCE OPTIMIZATIONS ---
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Your scroll logic here
    }, 100);
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// --- 12. KEYBOARD SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    // Escape to close modal
    if (e.key === 'Escape') {
        closePayment();
    }
    
    // Ctrl/Cmd + K to focus search (if added later)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus search input
    }
});