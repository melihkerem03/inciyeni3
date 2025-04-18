'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const testConnection = async () => {
    try {
      // Basit bir Supabase test sorgusu
      const { data, error } = await supabase.from('acentalar').select('*').limit(1)
      
      if (error) throw error
      
      setResult(data)
      setError(null)
    } catch (err: any) {
      setError(err.message || 'Bilinmeyen bir hata oluştu')
      console.error('Test hatası:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Supabase Bağlantı Testi</h1>
      
      <button 
        onClick={testConnection}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Bağlantıyı Test Et
      </button>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          <h3 className="font-bold">Hata:</h3>
          <p>{error}</p>
        </div>
      )}
      
      {result && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          <h3 className="font-bold">Başarılı Sonuç:</h3>
          <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 