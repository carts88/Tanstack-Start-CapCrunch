import { getPlayersSearch, getStaffSearch } from "./queries.search-bar";

// export function jsonResponse(data: any, statusCode: number) {
//     return new Response(JSON.stringify(data), {
//         status: statusCode,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
// }

const mapPlayers = (players: any[]) => {
    return players.map(player => ({
        playerId: player.player_id,
        fullName: `${player.first_name} ${player.last_name}`,
        playerSlug: player.player_slug,
        team: player.team,
    }));
};

const mapStaff = (staff: any[]) => {
    return staff.map(member => ({
        id: member.staff_id,
        fullName: `${member.first_name} ${member.last_name}`,
        staffSlug: member.staff_slug
    }));
};

interface IGetSearchData {
        search: string
}

export async function getSearchData({
    search
} :  IGetSearchData) {
    const [players, staff] = await Promise.all([
        getPlayersSearch({ search: search }),
        getStaffSearch({ search: search }),
    ]);
    if (!players.length && !staff.length) {
        return {
            success: false,
            code: 404,
            message: "No results found"
        };
    }

    return {
        success: true,
        code: 200,
        data: {
            players: mapPlayers(players),
            staff: mapStaff(staff)
        }
    }

}