export default function formatDate(diffTime) {
        let days = diffTime / (24*60*60*1000);
        let hours = (days % 1) * 24;
        let minutes = (hours % 1) * 60;
        let secs = (minutes % 1) * 60;
        [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
        return `${days}d ${hours}h ${minutes}m ${secs}s`;
}