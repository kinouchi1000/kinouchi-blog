import React, { useState, useEffect, ReactNode } from 'react'
import type { NextPage } from 'next'
import { Dropdown } from '../Atoms/Dropdown'
import { FaHome } from 'react-icons/fa'
import { client } from '../../api/client'
import { Category, SubCategories, SubCategory, MainCategories } from '../../interface/Category'

export const Menu: NextPage = () => {
  const [isOpen, setIsOpen] = useState('')
  const [categories, setCategories] = useState<Category[] | undefined>(undefined)

  useEffect(() => {
    const fetch = async () => {
      const subCategories: SubCategories = await client.get({ endpoint: 'subcategory' })
      const mainCategories: MainCategories = await client.get({ endpoint: 'maincategory' })
      // データ整形 --ここの処理が遅い。
      const category: Category[] = []
      mainCategories.contents.map((mc) => {
        const SC: SubCategory[] = []
        subCategories.contents.map((sc) => {
          if (mc.id == sc.mainCategory.id)
            SC.push({ id: sc.id, category: sc.subCategory, ref: sc.ref })
        })
        category.push({ id: mc.id, category: mc.category, subCategories: SC })
      })
      setCategories(category)
    }
    fetch()
  })

  return (
    <div className='h-10 bg-neutral-900'>
      <div className='justify-center mx-auto w-4/5'>
        <div className='flex flex-row'>
          {/* Home */}
          <a className='mx-3 hover:bg-neutral-600 rounded-sm' href={'/'}>
            <div className='flex flex-row p-2 m-auto space-x-2'>
              <FaHome className='self-center my-auto text-xl fill-white' />
            </div>
          </a>

          {categories?.map((c) => (
            <Dropdown
              isOpen={isOpen}
              onClick={setIsOpen}
              Name={c.category}
              subCategories={c.subCategories}
              key={c.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
