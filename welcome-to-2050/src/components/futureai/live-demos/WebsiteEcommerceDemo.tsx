import React, { useState } from 'react';
import {
  ShoppingBag,
  ShoppingCart,
  Search,
  Monitor,
  Smartphone,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  User,
  LayoutDashboard,
  Package,
  CreditCard,
  ArrowRight,
  Eye,
  Lock,
  Sparkles,
  LogOut,
  X,
} from 'lucide-react';

interface DemoProduct {
  id: string;
  name: string;
  category: 'Electronics' | 'AI Gadgets' | 'Accessories';
  price: number;
  image: string;
  stock: number;
  specs: string[];
  description: string;
}

interface CartItem {
  product: DemoProduct;
  qty: number;
}

interface DemoOrder {
  orderId: string;
  customerName: string;
  customerEmail: string;
  total: number;
  itemsCount: number;
  status: 'Confirmed (Test Mode)' | 'Processing' | 'Shipped';
  createdAt: string;
}

const INITIAL_PRODUCTS: DemoProduct[] = [
  {
    id: 'prod-1',
    name: 'NovaPulse Pro Wireless ANC Headphones',
    category: 'Electronics',
    price: 4999,
    image: '/images/pot8_ai_website_poster.jpg',
    stock: 14,
    specs: ['45dB Spatial ANC', '40-Hour Battery', 'Bluetooth 5.4 Multipoint', 'USB-C Fast Charge'],
    description: 'Studio-tuned wireless headphones with adaptive AI noise cancellation and spatial audio.',
  },
  {
    id: 'prod-2',
    name: 'AetherDesk Mechanical RGB Keyboard',
    category: 'Accessories',
    price: 3499,
    image: '/images/pot7_sharp_poster.jpg',
    stock: 22,
    specs: ['Hot-Swappable Switches', 'CNC Aluminum Frame', 'Tri-Mode Wireless', 'Custom Macro Knob'],
    description: 'Compact 75% gasket-mounted mechanical keyboard engineered for developers and creators.',
  },
  {
    id: 'prod-3',
    name: 'VisionLens AI Smart Camera Hub',
    category: 'AI Gadgets',
    price: 6999,
    image: '/images/pot4_sharp_poster.jpg',
    stock: 9,
    specs: ['4K 60FPS HDR Sensor', 'Auto-Framing AI Gimbal', 'Dual Noise-Canceling Mics', 'Plug & Play USB-C'],
    description: 'AI-powered 4K webcam and desk hub with automatic subject tracking and studio lighting adjustment.',
  },
  {
    id: 'prod-4',
    name: 'HyperCharge 140W GaN Travel Dock',
    category: 'Electronics',
    price: 2499,
    image: '/images/pot1_sharp_poster.jpg',
    stock: 30,
    specs: ['3x USB-C PD 3.1 Ports', '4K HDMI Display Out', 'Smart Thermal Guard', 'Foldable Plug'],
    description: 'All-in-one GaN power station and 4K display dock for laptops, tablets, and smartphones.',
  },
];

export const WebsiteEcommerceDemo: React.FC<{ onEnrollClick: () => void }> = ({ onEnrollClick }) => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'store' | 'cart' | 'checkout' | 'auth' | 'admin'>('store');
  const [products, setProducts] = useState<DemoProduct[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<DemoProduct | null>(null);

  const [cart, setCart] = useState<CartItem[]>([
    { product: INITIAL_PRODUCTS[0], qty: 1 },
  ]);

  // Demo Auth State
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [demoUser, setDemoUser] = useState<{ name: string; email: string } | null>(null);
  const [authNameInput, setAuthNameInput] = useState('Aarav Verma');
  const [authEmailInput, setAuthEmailInput] = useState('aarav@example.com');
  const [authPassInput, setAuthPassInput] = useState('••••••••');

  // Checkout State
  const [shippingName, setShippingName] = useState('Aarav Verma');
  const [shippingEmail, setShippingEmail] = useState('aarav@example.com');
  const [shippingAddress, setShippingAddress] = useState('42 Residency Road, Bengaluru, KA 560025');
  const [lastOrder, setLastOrder] = useState<DemoOrder | null>(null);

  // Admin State
  const [orders, setOrders] = useState<DemoOrder[]>([
    {
      orderId: 'ORD-84920',
      customerName: 'Priya Nair',
      customerEmail: 'priya.n@example.com',
      total: 4999,
      itemsCount: 1,
      status: 'Shipped',
      createdAt: 'Today, 10:15 AM',
    },
  ]);
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('1999');

  const addToCart = (product: DemoProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + tax;

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDemoAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = authNameInput.trim() || 'Demo Customer';
    const cleanEmail = authEmailInput.trim() || 'customer@example.com';
    setDemoUser({ name: cleanName, email: cleanEmail });
    setShippingName(cleanName);
    setShippingEmail(cleanEmail);
    setActiveTab('store');
  };

  const handleTestCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const created: DemoOrder = {
      orderId,
      customerName: shippingName || demoUser?.name || 'Guest Customer',
      customerEmail: shippingEmail || demoUser?.email || 'guest@example.com',
      total: grandTotal,
      itemsCount: cartCount,
      status: 'Confirmed (Test Mode)',
      createdAt: 'Just now',
    };
    setOrders((prev) => [created, ...prev]);
    setLastOrder(created);
    setCart([]);
  };

  const handleAddAdminProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;
    const priceNum = Math.max(99, parseInt(newProdPrice, 10) || 1999);
    const added: DemoProduct = {
      id: `prod-${Date.now()}`,
      name: newProdName.trim(),
      category: 'AI Gadgets',
      price: priceNum,
      image: '/images/pot8_ai_website_poster.jpg',
      stock: 15,
      specs: ['AI Powered', '1-Year Warranty', 'Express Shipping'],
      description: 'Newly added product via the interactive Admin Dashboard preview.',
    };
    setProducts((prev) => [added, ...prev]);
    setNewProdName('');
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
      {/* Top Browser Chrome & Viewport Controls */}
      <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3 py-1 rounded-lg text-xs text-slate-300 font-mono">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>https://novakart-ai-store.demo.app</span>
            <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-sans font-bold">
              Interactive Live Demo
            </span>
          </div>
        </div>

        {/* Desktop / Mobile Responsiveness Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-400 font-semibold hidden md:inline">
            Responsive Preview:
          </span>
          <div className="inline-flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            <button
              type="button"
              onClick={() => setViewport('desktop')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                viewport === 'desktop'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewport('mobile')}
              className={`px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                viewport === 'mobile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simulated E-Commerce Website Container */}
      <div className="bg-slate-100/70 p-2 sm:p-4 flex justify-center">
        <div
          className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 w-full ${
            viewport === 'mobile' ? 'max-w-[400px]' : 'max-w-full'
          }`}
        >
          {/* Storefront Navbar */}
          <div className="bg-white border-b border-slate-200 px-3 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                setActiveTab('store');
              }}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <span className="font-black text-sm sm:text-base text-slate-900 tracking-tight block leading-none">
                  NovaKart <span className="text-blue-600">AI Store</span>
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">
                  Built with AI in 10 Mins
                </span>
              </div>
            </button>

            {/* Navigation Pills inside Demo */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setActiveTab('store');
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'store'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Storefront
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setActiveTab('cart');
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'cart' || activeTab === 'checkout'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Cart</span>
                <span className="px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[10px] font-black">
                  {cartCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setActiveTab('auth');
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  activeTab === 'auth'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>{demoUser ? demoUser.name.split(' ')[0] : 'Login'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setActiveTab('admin');
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  activeTab === 'admin'
                    ? 'bg-purple-50 text-purple-700 border border-purple-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Admin Panel</span>
              </button>
            </div>
          </div>

          {/* ─── TAB 1: STOREFRONT & PRODUCT DETAIL ─── */}
          {activeTab === 'store' && (
            <div className="p-3 sm:p-5 space-y-4">
              {/* Product Detail Modal/View if a product is selected */}
              {selectedProduct ? (
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      ← Back to Products
                    </button>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      In Stock ({selectedProduct.stock} available)
                    </span>
                  </div>

                  <div className={`grid grid-cols-1 ${viewport === 'desktop' ? 'md:grid-cols-2' : ''} gap-5 items-center`}>
                    <div className="rounded-xl overflow-hidden bg-slate-900 aspect-16/10 border border-slate-200">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3 text-left">
                      <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                        {selectedProduct.category}
                      </span>
                      <h4 className="text-lg sm:text-xl font-black text-slate-900">
                        {selectedProduct.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        {selectedProduct.specs.map((sp, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{sp}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
                        <div>
                          <span className="text-xs text-slate-500 block">Selling Price</span>
                          <span className="text-2xl font-black text-slate-900">
                            ₹{selectedProduct.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(selectedProduct);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(selectedProduct);
                              setSelectedProduct(null);
                              setActiveTab('checkout');
                            }}
                            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Filter & Search Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {['All', 'Electronics', 'AI Gadgets', 'Accessories'].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                            selectedCategory === cat
                              ? 'bg-slate-900 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1 min-w-[180px] max-w-xs">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search store products..."
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div
                    className={`grid gap-3.5 ${
                      viewport === 'mobile'
                        ? 'grid-cols-1'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    }`}
                  >
                    {filteredProducts.map((prod) => {
                      const inCartItem = cart.find((c) => c.product.id === prod.id);
                      return (
                        <div
                          key={prod.id}
                          className="rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
                        >
                          <div>
                            <div
                              onClick={() => setSelectedProduct(prod)}
                              className="relative h-36 bg-slate-900 overflow-hidden cursor-pointer group"
                            >
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-bold backdrop-blur-xs">
                                {prod.category}
                              </span>
                              <button
                                type="button"
                                className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/95 text-slate-900 text-[10px] font-bold flex items-center gap-1 shadow-xs"
                              >
                                <Eye className="w-3 h-3 text-blue-600" />
                                <span>Details</span>
                              </button>
                            </div>

                            <div className="p-3 text-left">
                              <h5
                                onClick={() => setSelectedProduct(prod)}
                                className="font-bold text-xs sm:text-[13px] text-slate-900 line-clamp-1 cursor-pointer hover:text-blue-600"
                              >
                                {prod.name}
                              </h5>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {prod.specs.slice(0, 2).join(' • ')}
                              </p>
                            </div>
                          </div>

                          <div className="px-3 pb-3 pt-1 flex items-center justify-between border-t border-slate-100">
                            <span className="font-black text-sm text-slate-900">
                              ₹{prod.price.toLocaleString('en-IN')}
                            </span>

                            {inCartItem ? (
                              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-lg px-1.5 py-0.5">
                                <button
                                  type="button"
                                  onClick={() => updateCartQty(prod.id, -1)}
                                  className="w-5 h-5 rounded bg-white text-slate-700 flex items-center justify-center text-xs font-bold cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-xs font-black text-blue-700 px-1">
                                  {inCartItem.qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateCartQty(prod.id, 1)}
                                  className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-xs font-bold cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => addToCart(prod)}
                                className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add to Cart</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ─── TAB 2: SHOPPING CART ─── */}
          {activeTab === 'cart' && (
            <div className="p-4 sm:p-5 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-blue-600" />
                  <span>Your Shopping Cart ({cartCount} items)</span>
                </h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('store')}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  + Continue Shopping
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="py-8 text-center bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <ShoppingBag className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-700">Your demo cart is empty</p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('store')}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className={`grid grid-cols-1 ${viewport === 'desktop' ? 'lg:grid-cols-3' : ''} gap-4`}>
                  <div className="lg:col-span-2 space-y-2.5">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 bg-white"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-14 h-14 rounded-lg object-cover bg-slate-900 shrink-0"
                          />
                          <div className="min-w-0">
                            <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                              {item.product.name}
                            </h5>
                            <span className="text-xs font-bold text-blue-600">
                              ₹{item.product.price.toLocaleString('en-IN')} each
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-lg p-1">
                            <button
                              type="button"
                              onClick={() => updateCartQty(item.product.id, -1)}
                              className="w-6 h-6 rounded bg-white text-slate-700 flex items-center justify-center cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-black px-1.5">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateCartQty(item.product.id, 1)}
                              className="w-6 h-6 rounded bg-white text-slate-700 flex items-center justify-center cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.product.id, -item.qty)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 h-fit">
                    <h5 className="font-black text-sm text-slate-900">Order Summary</h5>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Subtotal</span>
                        <span className="font-bold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Estimated GST (18%)</span>
                        <span className="font-bold text-slate-900">₹{tax.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Shipping</span>
                        <span className="font-bold text-emerald-600">FREE</span>
                      </div>
                      <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-black text-slate-900">
                        <span>Total</span>
                        <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('checkout')}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ─── TAB 3: TEST-MODE CHECKOUT INTERFACE ─── */}
          {activeTab === 'checkout' && (
            <div className="p-4 sm:p-5 space-y-4 text-left">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    <strong>SANDBOX / TEST-MODE CHECKOUT:</strong> This is a frontend demonstration. No real money is charged here.
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 text-[10px] font-black uppercase shrink-0">
                  Test Mode
                </span>
              </div>

              {lastOrder && cart.length === 0 ? (
                <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">
                    Demo Order Confirmed! ({lastOrder.orderId})
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Test order for <strong>₹{lastOrder.total.toLocaleString('en-IN')}</strong> was recorded in the live state. You can inspect and manage this order right now inside the <strong>Admin Panel</strong> tab!
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab('admin')}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer"
                    >
                      View Order in Admin Dashboard →
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLastOrder(null);
                        setActiveTab('store');
                      }}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Back to Storefront
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleTestCheckoutSubmit}
                  className={`grid grid-cols-1 ${viewport === 'desktop' ? 'lg:grid-cols-3' : ''} gap-4`}
                >
                  <div className="lg:col-span-2 space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <h4 className="font-black text-sm text-slate-900 flex items-center gap-1.5">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span>Shipping & Test Checkout Details</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingName}
                          onChange={(e) => setShippingName(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Email for Order Notification
                        </label>
                        <input
                          type="email"
                          required
                          value={shippingEmail}
                          onChange={(e) => setShippingEmail(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800"
                      />
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                      <span className="font-bold text-slate-800 block">
                        Payment Method: Simulated Gateway (Test Mode)
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        In the live class, you will connect live Razorpay / Stripe APIs, server order creation, and webhook signature verification.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 h-fit">
                    <h5 className="font-black text-sm text-slate-900">Order Summary ({cartCount} items)</h5>
                    <div className="space-y-1 text-xs">
                      {cart.map((c) => (
                        <div key={c.product.id} className="flex justify-between text-slate-600">
                          <span className="truncate max-w-[160px]">
                            {c.qty}x {c.product.name}
                          </span>
                          <span className="font-bold text-slate-900">
                            ₹{(c.product.price * c.qty).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-slate-200 pt-2 flex justify-between text-xs text-slate-600">
                        <span>GST (18%)</span>
                        <span>₹{tax.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm font-black text-slate-900 pt-1">
                        <span>Payable (Test)</span>
                        <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={cart.length === 0}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black text-xs cursor-pointer shadow-xs"
                    >
                      Simulate Test-Mode Order (₹{grandTotal.toLocaleString('en-IN')})
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ─── TAB 4: LOGIN & REGISTRATION DEMO ─── */}
          {activeTab === 'auth' && (
            <div className="p-4 sm:p-6 flex justify-center text-left">
              {demoUser ? (
                <div className="max-w-md w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center mx-auto">
                    {demoUser.name.charAt(0).toUpperCase()}
                  </div>
                  <h4 className="font-black text-base text-slate-900">{demoUser.name}</h4>
                  <p className="text-xs text-slate-500">{demoUser.email}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    Authenticated Demo Customer Session
                  </span>
                  <div className="pt-2 flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('store')}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
                    >
                      Go to Storefront
                    </button>
                    <button
                      type="button"
                      onClick={() => setDemoUser(null)}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleDemoAuthSubmit}
                  className="max-w-md w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-base text-slate-900">
                      {authMode === 'login' ? 'Customer Sign In' : 'Create Customer Account'}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                      className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                    >
                      {authMode === 'login' ? 'Need an account? Register' : 'Have an account? Login'}
                    </button>
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={authNameInput}
                        onChange={(e) => setAuthNameInput(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={authEmailInput}
                      onChange={(e) => setAuthEmailInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Password</label>
                    <input
                      type="password"
                      required
                      value={authPassInput}
                      onChange={(e) => setAuthPassInput(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer"
                  >
                    {authMode === 'login' ? 'Sign In to Demo Store' : 'Create Demo Account'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ─── TAB 5: ADMIN DASHBOARD PREVIEW ─── */}
          {activeTab === 'admin' && (
            <div className="p-4 sm:p-5 space-y-4 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-black text-base text-slate-900 flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-purple-600" />
                    <span>E-Commerce Admin Dashboard Preview</span>
                  </h4>
                  <p className="text-xs text-slate-500">
                    Manage products, inventory, and orders placed in the storefront demo.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                  Live State Synced
                </span>
              </div>

              {/* Admin Metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 block">Active Products</span>
                  <span className="text-lg font-black text-slate-900">{products.length}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 block">Demo Orders</span>
                  <span className="text-lg font-black text-blue-600">{orders.length}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 block">Demo GMV</span>
                  <span className="text-lg font-black text-emerald-600">
                    ₹{orders.reduce((s, o) => s + o.total, 0).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className={`grid grid-cols-1 ${viewport === 'desktop' ? 'lg:grid-cols-3' : ''} gap-4`}>
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 p-3.5 rounded-2xl border border-slate-200 bg-white space-y-2.5">
                  <h5 className="font-black text-xs uppercase tracking-wider text-slate-700">
                    Recent Customer Orders
                  </h5>
                  <div className="space-y-2">
                    {orders.map((ord) => (
                      <div
                        key={ord.orderId}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs"
                      >
                        <div>
                          <span className="font-black text-slate-900">{ord.orderId}</span>
                          <span className="text-slate-500 ml-2">
                            {ord.customerName} ({ord.itemsCount} item{ord.itemsCount > 1 ? 's' : ''})
                          </span>
                          <span className="block text-[10px] text-slate-400">{ord.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-slate-900">
                            ₹{ord.total.toLocaleString('en-IN')}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {ord.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Add Product Form */}
                <form
                  onSubmit={handleAddAdminProduct}
                  className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 space-y-2.5 h-fit"
                >
                  <h5 className="font-black text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-purple-600" />
                    <span>Add Store Product</span>
                  </h5>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">
                      Product Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Smart Speaker"
                      value={newProdName}
                      onChange={(e) => setNewProdName(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 mb-1">
                      Price (₹)
                    </label>
                    <input
                      type="number"
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer"
                  >
                    + Publish to Storefront
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Explanation Bar */}
      <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            The 10-minute demonstration covers rapid AI-assisted website creation. Complete production integrations, testing and deployment are covered in the live training.
          </span>
        </div>
        <button
          type="button"
          onClick={onEnrollClick}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
        >
          <span>Enroll Now — ₹2,999</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
