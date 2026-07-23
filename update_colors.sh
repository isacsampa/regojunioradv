#!/bin/bash

# index.css
sed -i 's/bg-\[#0a0a0a\]/bg-black/g' src/index.css
sed -i 's/text-slate-300/text-neutral-400/g' src/index.css
sed -i 's/text-slate-50/text-white/g' src/index.css

# tsx files
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-\[#0a0a0a\]/bg-black/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-\[#111111\]/bg-\[#0c0a09\]/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-\[#111\]/bg-\[#0c0a09\]/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-\[#050505\]/bg-black/g' {} +

find src/ -type f -name "*.tsx" -exec sed -i 's/border-slate-800/border-wood-900\/50/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/border-slate-700/border-wood-800\/50/g' {} +

find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-50/text-white/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-200/text-white/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-300/text-neutral-300/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-400/text-neutral-400/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-500/text-neutral-500/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-600/text-neutral-500/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/text-slate-700/text-neutral-600/g' {} +

# Add some specific wood accents where gray was prominent
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-slate-900/bg-wood-950/g' {} +
find src/ -type f -name "*.tsx" -exec sed -i 's/bg-slate-800/bg-wood-900/g' {} +
