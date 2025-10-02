import { createElement } from 'react'
import { type IconBaseProps } from 'react-icons'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { HiMiniMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi";

const icons = {
  likeEmpty: AiOutlineHeart,
  likeFilled: AiFillHeart,
  delete: AiFillCloseCircle,
  moon: HiMiniMoon,
  sun: HiSun,
}

export const Icon = ({ name, ...restProps }: { name: keyof typeof icons } & IconBaseProps) => {
  return createElement(icons[name], restProps)
}
