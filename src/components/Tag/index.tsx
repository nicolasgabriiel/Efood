import { TagContainer } from './style'

export type Props = {
  size?: 'small' | 'big'
  children: string
  onClick?(): void
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
