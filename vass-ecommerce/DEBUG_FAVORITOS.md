# 🔍 Guía de Debug - Favoritos en Supabase

## ✅ Cambios Realizados

### 1. **LikesSlice.tsx** - Sincronización mejorada
- ✅ Ahora hace check correcto si el favorito existe en Supabase
- ✅ Agrega logs para saber qué está pasando
- ✅ Mejor manejo de errores
- ✅ Nueva acción `setLikes` para cargar favoritos desde Supabase

### 2. **favoritesService.ts** - Servicio mejorado
- ✅ Mejor manejo de errores con try/catch
- ✅ Logs para debug
- ✅ Nueva función `fetchUserFavorites` para obtener favoritos

### 3. **authService.ts** - Carga de favoritos en login
- ✅ Nueva función `loadUserFavoritesFromSupabase`
- ✅ Retorna IDs de productos favoritos del usuario

### 4. **Login.tsx** - Sincronización en login
- ✅ Después del login, carga favoritos de Supabase
- ✅ Actualiza Redux con los favoritos del usuario

### 5. **Favorites.tsx** - Sincronización en página
- ✅ UseEffect que carga favoritos al abrir la página
- ✅ Si el usuario está logueado, sincroniza con Supabase

---

## 🧪 Cómo Verificar que Funciona

### Paso 1: Abre la consola del navegador (F12)
En Chrome/Firefox: Click derecho → Inspeccionar → Console

### Paso 2: Verifica los logs
Deberías ver mensajes como:
```
✅ Favorito agregado a Supabase: 123
✅ Favoritos del usuario cargados: 3
✅ Favoritos sincronizados al login: 5
```

### Paso 3: Verifica en Supabase
1. Ve a tu proyecto en supabase.co
2. Abre la tabla `Favorites`
3. Deberías ver registros como:
   - `user_id`: (tu UUID)
   - `product_id`: (id del producto)

---

## 🐛 Si NO funciona, verifica:

### ❌ Error: "Property 'Favorites' does not exist"
**Solución**: La tabla `Favorites` no existe en Supabase
- Ve a SQL Editor → Copia esto:
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

### ❌ Error: "relation does not exist"
**Solución**: Asegúrate que la tabla está en el schema `public`

### ❌ Dice "insertado" pero no aparece en Supabase
**Solución**: Revisa las políticas de seguridad (RLS)
- Ve a Authentication → Policies
- Asegúrate que existen las 3 políticas de arriba

---

## 📊 Flujo Completo

1. **Usuario hace login** → Login.tsx carga favoritos de Supabase
2. **Usuario agrega un producto a favoritos** → toggleLikeAsync:
   - Chequea si existe en Supabase
   - Si NO existe → addFavorite (inserta)
   - Si EXISTE → removeFavorite (elimina)
   - Actualiza Redux
3. **Usuario abre Favorites** → Favorites.tsx sincroniza con Supabase
4. **Todo se guarda en localStorage** como backup

---

## 📝 Próximos Pasos Recomendados

1. Revisar la consola para los logs
2. Verificar que la tabla `Favorites` existe en Supabase
3. Confirmar que las políticas RLS están activas
4. Intentar agregar un favorito y verificar en Supabase

¡Si ves los logs ✅ y los datos en Supabase, ¡está funcionando! 🎉
