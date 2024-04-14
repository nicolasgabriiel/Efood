import { TagContainer } from './style'

export type Props = {
  size?: 'small' | 'big'
  title?: string
  children: string
  onClick?(): void
}

const Tag = ({ children, size = 'small', title }: Props) => (
  <TagContainer size={size} title={title}>
    {children}
  </TagContainer>
)

export default Tag
