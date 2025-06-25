import { Badge, type SvgIconTypeMap } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

const BadgeComponent = ({ badgeContent, iconType: Icon }: { badgeContent: number, iconType: OverridableComponent<SvgIconTypeMap> }) => {
    return (
        <Badge badgeContent={badgeContent}
            sx={{
                '& .MuiBadge-badge': {
                    backgroundColor: '#468078',
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bold'
                }
            }}>
            <Icon sx={{ fontSize: 30 }} />
        </Badge>
    )
}

export default BadgeComponent