# 🔍 Guía de Debug - Favoritos en Supabase

## ✅ Cambios Realizados

### 1. **LikesSlice.tsx** - Sincronización mejorada
- ✅ Ahora hace check correcto si el favorito existe en Supabase
- ✅ Agrega logs MEJORADOS para saber qué está pasando
- ✅ Mejor manejo de errores
- ✅ Nueva acción `setLikes` para cargar favoritos desde Supabase

### 2. **favoritesService.ts** - Servicio mejorado
- ✅ Mejor manejo de errores con try/catch
- ✅ Logs para debug
- ✅ Nueva función `fetchUserFavorites` para obtener favoritos

### 3. **authService.ts** - Carga de favoritos en login
- ✅ Nueva función `loadUserFavoritesFromSupabase` con logs detallados
- ✅ Muestra IDs de productos favoritos del usuario
- ✅ Muestra datos completos si hay error

### 4. **Login.tsx** - Sincronización en login
- ✅ Después del login, carga favoritos de Supabase
- ✅ Actualiza Redux con los favoritos del usuario

### 5. **Favorites.tsx** - Sincronización en página
- ✅ UseEffect que carga favoritos al abrir la página
- ✅ Si el usuario está logueado, sincroniza con Supabase

### 6. **DebugFavorites.tsx** - Componente de Debug (NUEVO)
- ✅ Botón flotante en la esquina inferior derecha
- ✅ Muestra usuario logueado
- ✅ Botón para cargar y ver favoritos
- ✅ Botón para test de inserción
- ✅ Lista todos los favoritos en la BD

---

## 🧪 Cómo Verificar que Funciona

### Paso 1: Abre la aplicación
- Deberías ver un botón **"🐛 Debug Favoritos"** en la esquina inferior derecha

### Paso 2: Haz login
- Ve a la página de login
- Verifica en la consola (F12) los logs

### Paso 3: Usa el Debug Panel
1. Click en el botón **"🐛 Debug Favoritos"**
2. Verifica que muestra tu email
3. Click en **"🔄 Cargar Favoritos"** para ver los favoritos en Supabase
4. Click en **"➕ Test Insert"** para hacer una prueba de inserción

### Paso 4: Verifica en Console (F12)
Deberías ver logs como:
```
🔍 Cargando favoritos para usuario: [UUID]
✅ Favoritos del usuario cargados: 2
📊 Datos completos: [...]
```

---

## 🐛 Si NO funciona, verifica:

### ❌ Error: "relation 'public.Favorites' does not exist"
**Solución**: La tabla no existe. Copia esto en **Supabase → SQL Editor**:

```sql
CREATE TABLE Favorites (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE Favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can see their own favorites"
  ON Favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites"
  ON Favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON Favorites FOR DELETE
  USING (auth.uid() = user_id);
```

### ❌ Error: "new row violates row-level security policy"
**Solución**: Las políticas RLS no permiten escribir
- Ve a **Authentication → Policies**
- Verifica que tienes 3 políticas
- Verifica que cada una tiene `auth.uid() = user_id`

### ❌ Dice "0 Favoritos" en el debug
**Solución**: Aún no has agregado favoritos
1. Agrega un producto a favoritos desde la tienda
2. Verifica en Console que dice "✅ Favorito agregado a Supabase"
3. Vuelve al Debug Panel y haz click en "🔄 Cargar Favoritos"

### ❌ Error: "Multiple GoTrueClient instances"
**Solución**: Este es un warning, no error. Es por React StrictMode en desarrollo
- No afecta en producción
- Si molesta, puedes remover StrictMode de `main.tsx`

---

## 📊 Flujo Completo

1. **Usuario hace login** 
   - Login.tsx carga favoritos de Supabase
   - Los agrega a Redux y localStorage

2. **Usuario agrega un producto a favoritos** 
   - toggleLikeAsync:
     - Chequea si existe en Supabase
     - Si NO existe → addFavorite (inserta)
     - Si EXISTE → removeFavorite (elimina)
     - Actualiza Redux

3. **Usuario abre Favorites** 
   - Favorites.tsx sincroniza con Supabase
   - Muestra los favoritos guardados

4. **Todo se guarda en localStorage** 
   - Como backup para cuando no hay internet

---

## 📝 Próximos Pasos

1. ✅ Abre el Debug Panel (botón azul abajo a la derecha)
2. ✅ Verifica que muestra tu usuario
3. ✅ Haz click en "🔄 Cargar Favoritos"
4. ✅ Si sale error, copia el error aquí y te ayudaré
5. ✅ Si no hay error pero dice "0 Favoritos", agrega uno nuevo
6. ✅ Vuelve a cargar y deberías verlo en la lista

---

## 🎯 Resumen de Logs que Deberías Ver

```
// Al hacer login:
🔍 Cargando favoritos para usuario: xxx-xxx-xxx
✅ Favoritos del usuario cargados: 3
📊 Datos completos: [{product_id: 1, ...}, ...]

// Al agregar un favorito:
📌 Sincronizando favorito con Supabase para usuario: xxx-xxx-xxx
📌 Producto ID: 15
➕ Agregando favorito a Supabase
✅ Favorito agregado a Supabase: 15

// Si NO está logueado:
❌ No hay usuario logueado, guardando localmente
```

¡Usa el Debug Panel para verificar todo! 🐛
